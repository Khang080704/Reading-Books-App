'use client';

import { faBook, faBookmark, faClock, faGear, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

//import routes
import { publicRoutes } from '@/app/routes/routes';
import { useState } from 'react';

function SideBar() {
    const [active, setActive] = useState(0)

    return (
        <div className="lg:sticky top-0 left-0 lg:w-fit flex flex-col justify-center items-center h-[100vh] pl-1">
            <ul >
                {publicRoutes.map((route, index) => {
                    return (
                        <Link href={route.path} key={index} onClick={() => {setActive(index)}}>
                            <li className={`mb-3 rounded-[50] p-2 ${active == index ? 'bg-[#E26264] ' : ''}`}>  
                                <FontAwesomeIcon icon={route.icon} className={`w-[30px] h-[30px] ${active == index ? "text-white": 'text-black'}`} />
                                <span className={active == index ? 'text-white': ''}>{route.name}</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideBar;
