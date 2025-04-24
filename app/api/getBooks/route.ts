import { NextRequest, NextResponse } from 'next/server';
import { poolPromise } from '@/app/lib/db/db';

import DAO from '@/DAO/Interface';
import MockDAO from '@/DAO/MockDAO';
import Book from '@/MockData/Book';

const idao: DAO = new MockDAO()

export async function GET(req: NextRequest) {
    const token = process.env.LOTR_token
    const res: Book[] = await idao.getAllBooks();
    const response = NextResponse.json({res})
    return NextResponse.json({res})
}
