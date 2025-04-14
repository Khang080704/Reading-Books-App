import Login from "@/app/components/login";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href={'pages/login'}>Login</Link>
            <Link href={'pages/user/Home'}>Dashboard</Link>
        </div>
    )
}
