'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import SideBar from '@/app/components/sidebar';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState('');

    useEffect(() => {
        if (isOpen) {
            setAnimate('slide-in');
        }
        else {
            setAnimate('slide-out')
        }
    }, [isOpen]);

    return (
        <div className="w-full bg-white fixed z-2 pl-4 py-2 shadow-black shadow-2xl">
            <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            />

            {/* {Making modal layer} */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-3"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                ></div>
            )}

            <aside className={`fixed top-0 left-0 z-4 bg-white px-1 ${animate}`}>
                <SideBar />
            </aside>
        </div>
    );
}

export default Menu;
