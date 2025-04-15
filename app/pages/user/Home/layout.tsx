import Search from "@/app/components/user/search"
import User from "@/app/components/user/profile"

function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="w-full border-l-[0.5] pl-4 max-md:border-none max-md:pl-0">
            <div className="grid grid-cols-2 gap-5 mt-2 mb-10">
                <Search/>
                <User name="Khang Pham" avatar="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default HomeLayout