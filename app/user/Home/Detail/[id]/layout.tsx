'use client';

import React, { useEffect, createContext, useState, useContext } from 'react';
import BackButton from '@/app/components/back';
import { BtnContext } from '@/app/context/BtnContext';

function DetailLayout({ children }: { children: React.ReactNode }) {
    const context = useContext(BtnContext);

    useEffect(() => {
        context?.setPassedComponent(<BackButton />);
        const main = document.querySelector('main');
        if (main) {
            console.log(main);
            main.style.background = 'linear-gradient(to right, #F1EEE3)';
        }
    }, []);

    return <div className="w-full bg-[#FDFBF7] mt-30 shadow-2xl relative">{children}</div>;
}
export default DetailLayout;
