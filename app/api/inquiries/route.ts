import { NextResponse } from 'next/server';
import { createServerClient } from '@/app/lib/supabase/server';
import { validateSession } from '@/app/lib/auth';
import { sendInquiryNotification } from '@/app/lib/email';
import type { FranchiseInquiry, FranchiseInquiryInsert, FranchiseInquiryUpdate } from '@/app/lib/types/database';

// GET: List inquiries (protected) or single inquiry if id is provided
export async function GET(request: Request) {
  try {
    const isAuthenticated = await validateSession();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabase = createServerClient();
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    // Single inquiry query
    if (id) {
      const { data, error } = await supabase
        .from('franchise_inquiries')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        return NextResponse.json(
          { error: 'Inquiry not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ inquiry: data as FranchiseInquiry });
    }

    // List inquiries query
    const status = url.searchParams.get('status');

    let query = supabase
      .from('franchise_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (status && ['pending', 'contacted', 'completed', 'cancelled'].includes(status)) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Failed to fetch inquiries:', error);
      return NextResponse.json(
        { error: 'Failed to fetch inquiries' },
        { status: 500 }
      );
    }

    return NextResponse.json({ inquiries: data as FranchiseInquiry[] });
  } catch (error) {
    console.error('Inquiries GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST: Create inquiry (public)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.desiredLocation) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // Basic phone validation
    const phoneDigits = body.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return NextResponse.json(
        { error: '올바른 연락처를 입력해주세요.' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const insertData: FranchiseInquiryInsert = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      desired_location: body.desiredLocation.trim(),
      privacy_consent: body.privacyConsent ?? true,
    };

    const { data, error } = await supabase
      .from('franchise_inquiries')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error('Failed to create inquiry:', error);
      return NextResponse.json(
        { error: '문의 접수에 실패했습니다.' },
        { status: 500 }
      );
    }

    // Send email notification (don't block response)
    const emailResult = await sendInquiryNotification({
      name: insertData.name,
      phone: insertData.phone,
      desiredLocation: insertData.desired_location,
      createdAt: data.created_at,
    });

    // Update email_sent status
    if (emailResult.success) {
      await supabase
        .from('franchise_inquiries')
        .update({
          email_sent: true,
          email_sent_at: new Date().toISOString(),
        })
        .eq('id', data.id);
    }

    return NextResponse.json(
      {
        success: true,
        message: '문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Inquiries POST error:', error);
    return NextResponse.json(
      { error: '문의 접수에 실패했습니다.' },
      { status: 500 }
    );
  }
}

// PUT: Update inquiry (protected) - id via query param
export async function PUT(request: Request) {
  try {
    const isAuthenticated = await validateSession();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    const body = await request.json();
    const supabase = createServerClient();

    const updateData: FranchiseInquiryUpdate = {};

    if (body.status !== undefined) {
      const validStatuses = ['pending', 'contacted', 'completed', 'cancelled'];
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json(
          { error: 'Invalid status' },
          { status: 400 }
        );
      }
      updateData.status = body.status;
    }

    if (body.notes !== undefined) {
      updateData.notes = body.notes;
    }

    const { data, error } = await supabase
      .from('franchise_inquiries')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Failed to update inquiry:', error);
      return NextResponse.json(
        { error: 'Failed to update inquiry' },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      inquiry: data as FranchiseInquiry,
    });
  } catch (error) {
    console.error('Inquiry PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE: Delete inquiry (protected) - id via query param
export async function DELETE(request: Request) {
  try {
    const isAuthenticated = await validateSession();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    const supabase = createServerClient();

    const { error } = await supabase
      .from('franchise_inquiries')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Failed to delete inquiry:', error);
      return NextResponse.json(
        { error: 'Failed to delete inquiry' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry deleted successfully',
    });
  } catch (error) {
    console.error('Inquiry DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
