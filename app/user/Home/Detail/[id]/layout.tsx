'use client';

import React, { useEffect } from "react"

function DetailLayout({children}: {children: React.ReactNode}) {
    useEffect(() => {
        const main = document.querySelector('main')
        if(main) {
            console.log(main)
            main.style.background = 'linear-gradient(to right, #F1EEE3)'
        }
    }, [])

    return (
        <div className="w-full bg-[#FDFBF7] mt-30 shadow-2xl relative">
            {children}
        </div>
    )
}
export default DetailLayout