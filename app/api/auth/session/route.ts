import { NextResponse } from 'next/server';
import { validateSession } from '@/app/lib/auth';

export async function GET() {
  try {
    const isAuthenticated = await validateSession();

    if (!isAuthenticated) {
      return NextResponse.json({
        authenticated: false,
      }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
    });
  } catch (error) {
    console.error('Session check error:', error);
    return NextResponse.json({
      authenticated: false,
    }, { status: 401 });
  }
}
