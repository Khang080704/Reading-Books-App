import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;

    if (!token ) {
        if(req.nextUrl.pathname.startsWith('/user')) {
            return NextResponse.redirect(new URL(`/login`, req.url));
        }
        if(req.nextUrl.pathname.startsWith('/user')) {
            const redirectUrl = encodeURIComponent(req.nextUrl.pathname);
            return NextResponse.redirect(new URL(`/login`, req.url));
        }
        
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/user/Book',
        
        '/user/Time',
    ]
}
