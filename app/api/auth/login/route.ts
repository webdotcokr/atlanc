import { NextResponse } from 'next/server';
import { validateCredentials, createSession, setSessionCookie } from '@/app/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, password } = body;

    if (!id || !password) {
      return NextResponse.json(
        { success: false, message: '아이디와 비밀번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    const isValid = await validateCredentials(id, password);

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    const sessionToken = await createSession();
    await setSessionCookie(sessionToken);

    return NextResponse.json({
      success: true,
      message: '로그인 성공',
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: '로그인 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
