import SideBar from "@/app/components/sidebar";
import Menu from "@/app/components/mobileMenu";

function UserLayout({children}: {children: React.ReactNode}) {

    return (
        <main className="flex w-full" style={{background: 'linear-gradient(to right, #FDFBF7 0%, #FDFBF7 30%, #F1EEE3 30%, #F1EEE3 100%)'}}>
            <aside className="max-md:hidden">
                <SideBar/>
            </aside>
            <nav className="hidden max-md:block max-h-[80px]">
                <Menu/>
            </nav>
            <main className="flex-1 px-10 max-md:px-0 max-md:mt-[60px]">
                {children}
            </main>
        </main>
    )
}

export default UserLayout