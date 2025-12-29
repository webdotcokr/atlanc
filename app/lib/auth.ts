import { cookies } from 'next/headers';
import { createServerClient } from './supabase/server';
import crypto from 'crypto';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export async function validateCredentials(id: string, password: string): Promise<boolean> {
  const adminId = process.env.ADMIN_ID;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminId || !adminPassword) {
    console.error('Admin credentials not configured');
    return false;
  }

  return id === adminId && password === adminPassword;
}

export async function createSession(): Promise<string> {
  const supabase = createServerClient();
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  const { error } = await supabase.from('admin_sessions').insert({
    session_token: token,
    expires_at: expiresAt.toISOString(),
  });

  if (error) {
    console.error('Failed to create session:', error);
    throw new Error('Failed to create session');
  }

  return token;
}

export async function validateSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return false;
  }

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('admin_sessions')
    .select('expires_at')
    .eq('session_token', token)
    .single();

  if (error || !data) {
    return false;
  }

  const isValid = new Date(data.expires_at) > new Date();

  if (!isValid) {
    // Clean up expired session
    await supabase.from('admin_sessions').delete().eq('session_token', token);
  }

  return isValid;
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION_MS / 1000,
    path: '/',
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (token) {
    // Delete session from database
    const supabase = createServerClient();
    await supabase.from('admin_sessions').delete().eq('session_token', token);
  }

  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function getSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value;
}

// Clean up expired sessions (can be called periodically)
export async function cleanupExpiredSessions(): Promise<void> {
  const supabase = createServerClient();
  await supabase
    .from('admin_sessions')
    .delete()
    .lt('expires_at', new Date().toISOString());
}
