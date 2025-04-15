'use client';

import Button from '@/app/components/button';

//import data
import DAO from '@/DAO/Interface';
import MockDAO from '@/DAO/MockDAO';
import Book from '@/MockData/Book';
import React, { useState } from 'react';

function HomePage() {
    const IDAO: DAO = new MockDAO();
    const books = IDAO.getAllBooks();

    const [choose, setChoose] = useState(0)

    return (
        <div className="w-full">
            <div className="flex max-md:flex-col-reverse">
                <div className="flex flex-col w-[50%] pr-9 max-md:pr-4 max-md:w-full">
                    
                    <h1 className="font-bold text-[2rem] mb-9 max-md:hidden">Happy reading, Khang Pham</h1>
                    <p className='mb-9 max-md:hidden'>
                        {books[choose].description}
                    </p>
                    <div className="flex justify-between items-center max-md:mt-10">
                        <Button content="Start reading" />
                        <Button content="View detail" />
                    </div>
                </div>
                
                <div className="flex flex-1 w-full">
                    <div className='w-[40%] h-full rounded-[20] shadow-2xl shadow-black overflow-hidden mr-4'>
                        <img src={books[choose].image} className='object-contain shadow-2xs w-full h-full'/>
                    </div>
                    <div className='flex-1 flex flex-col justify-between'>
                        <h1 className='font-bold text-[30px]'>{books[choose].name}</h1>
                        <p>NEW YORK TIMES BESTSELLER Perfect for fans of A Song of Ice and Fire and HBO's Game of Thrones</p>
                        <p className='text-right font-bold'>- {books[choose].author}</p>
                    </div>
                </div>
                <h1 className='hidden font-bold text-[2rem] mb-9 max-md:block'>Happy reading, Khang Pham</h1>
            </div> 

            <h1 className='font-bold text-[25px] my-10'>Popular now</h1>

            <div className='grid grid-cols-4 gap-x-10 gap-y-4 flex-shrink-0 max-md:grid-cols-2'>
                {books.map(function(book: Book, index: number): React.ReactNode {
                    return (
                        <div key={index} onClick={() => {setChoose(index)}} 
                        className='hover:cursor-pointer hover:bg-gray-200 rounded-3xl hover:transform-[translateY(-4)] ' >

                            {/* <div className='pt-[100%] bg-contain bg-no-repeat bg-center rounded-3xl overflow-hidden'
                             style={{backgroundImage: `url(${book.image})`}}>
                                
                            </div> */}

                            <div className='w-full h-[400px] rounded-2xl overflow-hidden shadow-black shadow-2xl max-md:h-[250px]'>
                                <img src={book.image} className='w-full h-full object-cover object-top'/>
                            </div>
                            <p className='text-center mt-3 font-semibold '>{book.name}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default HomePage;
