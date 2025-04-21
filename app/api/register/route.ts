import { NextResponse, NextRequest } from "next/server";

import User from "@/MockData/data";
import MockDAO from "@/DAO/MockDAO";
import DAO from "@/DAO/Interface";
import { UserRepository } from "@/DAO/UserRepository";

const userRepo = UserRepository.getInstance(new MockDAO())

export async function POST(req: NextRequest) {
    const {name, email, password} = await req.json()
    console.log(name)
    
    const users = await userRepo.getUsers()
    const newUser = new User(email, password, name)
    await userRepo.addUser(newUser)
    
    const response = NextResponse.json({ success: true });
    const token = JSON.stringify({ name: newUser.name});

    response.cookies.set({
        name: 'token',
        value: token,
        httpOnly: false,
        path: '/',
        maxAge: 60 * 60 * 24 * 30 
    });
    return response

    return NextResponse.json({ message: 'Register successful', user: newUser })

}