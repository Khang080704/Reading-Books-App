// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { poolPromise } from '@/app/lib/db/db';
import { comparePassword } from '@/app/lib/hash/hash';

export async function POST(req: NextRequest) {
    const { email, password, remember } = await req.json();
    let account;

    try {
        const pool = await poolPromise;
        const result = pool.request().input('email', email).query('select * from users where email = @email');
        account = (await result).recordset[0];

        if (account) {
            const token = JSON.stringify({ name: account.Name });

            const response = NextResponse.json({ success: true });

            // Gắn cookie vào response
            response.cookies.set({
                name: 'token',
                value: token,
                httpOnly: false,
                path: '/',
                maxAge: remember ? 60 * 60 * 24 * 30 : undefined,
            });

            return response;
        }

        return NextResponse.json({ success: false, message: 'Sai thông tin đăng nhập' }, { status: 401 });
    } catch (err) {
        console.log('Error: ', err);
        throw err
    }

    // const account = MOCK_USER.filter((value: User) => {
    //     return (value.email == email && value.password == password)
    // })[0]
}
