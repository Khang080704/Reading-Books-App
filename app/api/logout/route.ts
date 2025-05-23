// app/api/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ success: true });

    // Xoá cookie "token"
    response.cookies.set({
        name: 'token',
        value: '',
        path: '/',
        maxAge: 0,
    });

    return response;
}
