import Login from "@/app/components/login";
import Link from "next/link";
import HomePage from "./user/Home/page";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation"
export default function Home(res: NextResponse) {
    redirect('/user/Home')
    return (
        <div>
        </div>
    )
}
