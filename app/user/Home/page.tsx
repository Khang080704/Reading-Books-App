'use client';
import Button from '@/app/components/button';
import React, { Suspense, useEffect, useState } from 'react';
import { useCookiesNext } from 'cookies-next';

//import data
import DAO from '@/DAO/Interface';
import MockDAO from '@/DAO/MockDAO';
import Book from '@/MockData/Book';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    const IDAO: DAO = new MockDAO();
    const [choose, setChoose] = useState(0);
    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch('/api/getBooks', {
                method: 'GET'
            })
            if(res.ok) {
                const data = await res.json()
                console.log(data.data.items)
                setBooks(data.data.items)
            }
        }
        fetchBooks()
    }, []);

    const token = useCookiesNext().getCookie('token')?.toString();
    let user = JSON.parse(token || '{}').name;

    return (
        <div className="w-full">
            <div className="flex max-md:flex-col-reverse">
                <div className="flex flex-col w-[50%] pr-9 max-md:pr-4 max-md:w-full">
                    {user ? (
                        <h1 className="font-bold text-[2rem] mb-9 max-md:hidden">Happy reading, {user} </h1>
                    ) : (
                        <></>
                    )}

                    <p className="mb-9 max-md:hidden h-[290px]">{books[choose]?.volumeInfo?.description}</p>
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

                <div className="flex flex-1 w-full">
                    <div className="w-[40%] rounded-[20] shadow-2xl shadow-black overflow-hidden mr-4 ">
                        <img src={books[choose]?.volumeInfo.imageLinks.thumbnail} className="object-cover shadow-2xs w-full h-full" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <h1 className="font-bold text-[30px]">{books[choose]?.volumeInfo.title}</h1>
                        <p>
                            NEW YORK TIMES BESTSELLER Perfect for fans of A Song of Ice and Fire and HBO's Game of
                            Thrones
                        </p>
                        <p className="text-right font-bold">- {books[choose]?.volumeInfo.authors[0]}</p>
                    </div>
                </div>
                <h1 className="hidden font-bold text-[2rem] mb-9 max-md:block">Happy reading, Khang Pham</h1>
            </div>

            <h1 className="font-bold text-[25px] my-10">Popular now</h1>

            <div className="grid grid-cols-4 gap-x-10 gap-y-4 flex-shrink-0 max-md:grid-cols-2">
                {books.map(function (book: any, index: number): React.ReactNode {
                    return (
                        <div key={index}>
                            <div
                                onClick={() => {
                                    setChoose(index);
                                }}
                                className="hover:cursor-pointer hover:bg-gray-200 rounded-3xl hover:transform-[translateY(-4)] "
                            >
                                <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-black shadow-2xl max-md:h-[250px]">
                                    <img src={book?.volumeInfo.imageLinks.thumbnail} className="w-full h-full object-cover object-top" />
                                </div>
                                <p className="text-center mt-3 font-semibold ">{book?.volumeInfo.title}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;
