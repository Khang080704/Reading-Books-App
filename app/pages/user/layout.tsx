import SideBar from "@/app/components/sidebar";

function UserLayout({children}: {children: React.ReactNode}) {

    return (
        <div className="flex w-full" style={{background: 'linear-gradient(to right, #FDFBF7 0%, #FDFBF7 30%, #F1EEE3 30%, #F1EEE3 100%)'}}>
            <aside className="max-md:hidden">
                <SideBar/>
            </aside>
            <main className="flex-1 px-10 max-md:px-2">
                {children}
            </main>
        </div>
    )
}

export default UserLayout