'use client';
import Button from '@/app/components/button';
import React, { Suspense, useEffect, useState } from 'react';
import { useCookiesNext } from 'cookies-next';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

//import data
import DAO from '@/DAO/Interface';
import MockDAO from '@/DAO/MockDAO';
import Book from '@/MockData/Book';
import { BookDTO } from '@/DAO/Interface';

function HomePage() {
    const IDAO: DAO = new MockDAO();
    const [choose, setChoose] = useState(0);
    const [books, setBooks] = useState<BookDTO[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch('/api/getBooks', {
                method: 'GET',
            });
            if (res.ok) {
                const data = await res.json();
                setBooks(data.res);
            }
        };
        fetchBooks();
    }, []);

    const token = useCookiesNext().getCookie('token')?.toString();
    let user = JSON.parse(token || '{}').name;

    return (
        <div className="w-full">
            <div className="flex max-md:flex-col-reverse">
                <div className="flex flex-col w-[50%] pr-7 max-md:pr-4 max-md:w-full">
                    <h1 className="font-bold text-[2rem] mb-9 max-md:hidden">
                        {user ? `Happy reading, ${user}` : 'Happy reading'}
                    </h1>

                    <p className="mb-9 max-md:hidden h-[150px]">{books[choose]?.description}</p>
                    <div className="flex justify-between items-center max-md:mt-10">
                        <Button content="Start reading" comp="button" icon={faArrowUp} width="200px" primary />
                        <Button
                            content="View detail"
                            comp="a"
                            icon={faArrowUp}
                            href={`./Home/Detail/${choose}`}
                            primary
                        />
                    </div>
                </div>

                <div className="flex flex-1 w-full max-md:flex-col max-md:items-center">
                    {/* <div className="relative w-[40%] rounded-[20] shadow-2xl shadow-black overflow-hidden mr-4 ">
                    </div> */}
                    <img
                        src={books[choose]?.image}
                        className="object-cover w-[300px] h-[300px] rounded-[20] shadow-2xl shadow-black overflow-hidden mr-4
                        max-md:mb-4"
                        alt="cover image"
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />

                    <div className="flex-1 flex flex-col justify-between">
                        <h1 className="font-bold text-[30px] max-md:text-center">{books[choose]?.name}</h1>
                        <p className='max-md:text-center'>{books[choose]?.preface}</p>
                        <p className="text-right font-bold">- {books[choose]?.author}</p>
                    </div>
                </div>
                <h1 className="hidden font-bold text-[2rem] mb-9 max-md:block">Happy reading, Khang Pham</h1>
            </div>

            <h1 className="font-bold text-[25px] my-10">Popular now</h1>

            <div className="grid grid-cols-4 gap-x-10 gap-y-4 max-md:grid-cols-2 max-md:gap-x-5">
                {books.map(function (book: any, index: number): React.ReactNode {
                    return (
                        <div key={index}>
                            <div
                                onClick={() => {
                                    setChoose(index);
                                }}
                                className="hover:cursor-pointer hover:bg-gray-200 rounded-3xl hover:transform-[translateY(-4)] flex flex-col justify-center "
                            >
                                {/* <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-black shadow-2xl max-md:h-[250px]">
                                </div> */}
                                <img
                                    src={book?.image}
                                    className="w-full h-[350px] object-contain object-center rounded-2xl max-md:h-[150px] "
                                    alt="cover image"
                                />
                                <p className="text-center mt-3 font-semibold max-md:text-[0.9rem]">{book?.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;
