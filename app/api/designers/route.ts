import { NextResponse } from 'next/server';
import { createServerClient } from '@/app/lib/supabase/server';
import { validateSession } from '@/app/lib/auth';
import { toDesignerDisplay, type Designer, type DesignerInsert, type DesignerUpdate } from '@/app/lib/types/database';

// GET: List designers (public) or single designer if id is provided
export async function GET(request: Request) {
  try {
    const supabase = createServerClient();
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    // Single designer query
    if (id) {
      const { data, error } = await supabase
        .from('designers')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        return NextResponse.json(
          { error: 'Designer not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ designer: toDesignerDisplay(data as Designer) });
    }

    // List designers query
    const location = url.searchParams.get('location');
    const includeInactive = url.searchParams.get('includeInactive') === 'true';

    let query = supabase
      .from('designers')
      .select('*')
      .order('display_order', { ascending: true });

    if (!includeInactive) {
      query = query.eq('is_active', true);
    }

    if (location && (location === 'sinsa' || location === 'konkuk')) {
      query = query.eq('location', location);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Failed to fetch designers:', error);
      return NextResponse.json(
        { error: 'Failed to fetch designers' },
        { status: 500 }
      );
    }

    const designers = (data as Designer[]).map(toDesignerDisplay);

    return NextResponse.json({ designers });
  } catch (error) {
    console.error('Designers GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST: Create designer (protected)
export async function POST(request: Request) {
  try {
    // Verify admin session
    const isAuthenticated = await validateSession();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate required fields
    const requiredFields = ['location', 'name', 'position', 'image', 'description'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (body.location !== 'sinsa' && body.location !== 'konkuk') {
      return NextResponse.json(
        { error: 'Location must be sinsa or konkuk' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const insertData: DesignerInsert = {
      location: body.location,
      name: body.name,
      position: body.position,
      image: body.image,
      social_wonbar: body.social?.wonbar || null,
      social_instagram: body.social?.instagram || null,
      url_instagram: body.urls?.instagram || '',
      url_booking: body.urls?.booking || '',
      url_youtube: body.urls?.youtube || null,
      description: body.description,
      display_order: body.displayOrder ?? 0,
      is_active: body.isActive ?? true,
    };

    const { data, error } = await supabase
      .from('designers')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error('Failed to create designer:', error);
      return NextResponse.json(
        { error: 'Failed to create designer' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, designer: toDesignerDisplay(data as Designer) },
      { status: 201 }
    );
  } catch (error) {
    console.error('Designers POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT: Update designer (protected) - id via query param
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

    // Build update object
    const updateData: DesignerUpdate = {};

    if (body.location !== undefined) {
      if (body.location !== 'sinsa' && body.location !== 'konkuk') {
        return NextResponse.json(
          { error: 'Location must be sinsa or konkuk' },
          { status: 400 }
        );
      }
      updateData.location = body.location;
    }
    if (body.name !== undefined) updateData.name = body.name;
    if (body.position !== undefined) updateData.position = body.position;
    if (body.image !== undefined) updateData.image = body.image;
    if (body.social?.wonbar !== undefined) updateData.social_wonbar = body.social.wonbar;
    if (body.social?.instagram !== undefined) updateData.social_instagram = body.social.instagram;
    if (body.urls?.instagram !== undefined) updateData.url_instagram = body.urls.instagram;
    if (body.urls?.booking !== undefined) updateData.url_booking = body.urls.booking;
    if (body.urls?.youtube !== undefined) updateData.url_youtube = body.urls.youtube;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.displayOrder !== undefined) updateData.display_order = body.displayOrder;
    if (body.isActive !== undefined) updateData.is_active = body.isActive;

    const { data, error } = await supabase
      .from('designers')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Failed to update designer:', error);
      return NextResponse.json(
        { error: 'Failed to update designer' },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Designer not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      designer: toDesignerDisplay(data as Designer),
    });
  } catch (error) {
    console.error('Designer PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE: Delete designer (protected) - id via query param
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
      .from('designers')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Failed to delete designer:', error);
      return NextResponse.json(
        { error: 'Failed to delete designer' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Designer deleted successfully',
    });
  } catch (error) {
    console.error('Designer DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
