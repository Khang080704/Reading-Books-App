'use client';
import Search from '@/app/components/user/search';
import User from '@/app/components/user/profile';
import Button from '@/app/components/button';
import { BtnContext } from '@/app/context/BtnContext';


import { useCookiesNext } from 'cookies-next';
import { faArrowLeft, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';

function HomeLayout({ children }: { children: React.ReactNode }) {
    const [Component, setComponent] = useState<React.ReactNode | null>(null)
    const setPassedComponent = (component: React.ReactNode | null) => {
        setComponent(component);
    };

    const token = useCookiesNext().getCookie('token')?.toString();
    let user = JSON.parse(token || '{}').name;

    async function handlLogout() {
        await fetch('/api/logout', {
            method: 'POST',
        });
        window.location.href = '/';
    }

    return (
        <BtnContext.Provider value={{Component, setPassedComponent}}>
            <div className="w-full border-l-[0.5] pl-4 max-md:border-none max-md:pl-0 relative">
                <div className="grid grid-cols-2 gap-5 mt-2 mb-10">
                    <div className='w-full'>

                    {Component || <Search/>}
                    </div>
            
                    {token ? (
                        <div className="flex justify-end items-center hover:cursor-pointer" onClick={handlLogout}>
                            <User
                                name={user}
                                avatar="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                            />
                            <span className="mr-2">Log out</span>
                            <FontAwesomeIcon icon={faSignOut} />
                        </div>
                    ) : (
                        <div className="flex justify-end flex-wrap">
                            <Button content="Login" comp="a" href="/login" width='150px' primary/>
                            <Button content="Sign Up" comp="a" href="/login" width='150px'/>
                        </div>
                    )}
                </div>
                <div>{children}</div>
            </div>
        </BtnContext.Provider>
    );
}

export default HomeLayout;
