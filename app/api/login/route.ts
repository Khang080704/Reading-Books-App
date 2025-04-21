// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

import User from '@/MockData/data';
import DAO from '@/DAO/Interface';
import MockDAO from '@/DAO/MockDAO';
import { UserRepository } from '@/DAO/UserRepository';

const userRepo = UserRepository.getInstance(new MockDAO())
const IDao: DAO = new MockDAO()
const MOCK_USER = await userRepo.getUsers() // array


export async function POST(req: NextRequest) {
    const { email, password, remember } = await req.json();

    const account = MOCK_USER.filter((value: User) => {
        return (value.email == email && value.password == password)
    })[0]


    if (account) {
        const token = JSON.stringify({ name: account.name});

        const response = NextResponse.json({ success: true });

        // Gắn cookie vào response
        response.cookies.set({
            name: 'token',
            value: token,
            httpOnly: false,
            path: '/',
            maxAge: remember ? 60 * 60 * 24 * 30 : undefined
        });

        return response;
    }

    return NextResponse.json({ success: false, message: 'Sai thông tin đăng nhập' }, { status: 401 });
}
