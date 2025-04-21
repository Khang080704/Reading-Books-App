import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const token = process.env.LOTR_token
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fantasy');
    const data = await res.json();
    const response = NextResponse.json({data})
    return response
}


