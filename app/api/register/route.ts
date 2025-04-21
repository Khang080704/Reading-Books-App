import { NextResponse, NextRequest } from 'next/server';
import { poolPromise } from '@/app/lib/db/db';
import { hashPassword } from '@/app/lib/hash/hash';

import User from '@/MockData/data';

async function insertUser(username: string, password: string, email: string) {
    const pool = await poolPromise;
    await pool.request().input('email', email).input('password', password).input('username', username).query(`
        insert into users (email, password, name)
        values (@email, @password, @username)
        `);
}

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json();
    const HashPassword = await hashPassword(password) 

    const newUser = new User(email, HashPassword, name);
    await insertUser(name, HashPassword, email)

    const response = NextResponse.json({ success: true });
    const token = JSON.stringify({ name: newUser.name });

    response.cookies.set({
        name: 'token',
        value: token,
        httpOnly: false,
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
    });
    return response;

    return NextResponse.json({ message: 'Register successful', user: newUser });
}
