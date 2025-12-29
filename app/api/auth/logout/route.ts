import { NextResponse } from 'next/server';
import { clearSessionCookie } from '@/app/lib/auth';

export async function POST() {
  try {
    await clearSessionCookie();

    return NextResponse.json({
      success: true,
      message: '로그아웃 성공',
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: '로그아웃 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
