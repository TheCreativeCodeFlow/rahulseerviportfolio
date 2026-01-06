import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.has('admin_session');

    return NextResponse.json({ authenticated: isLoggedIn });
}
