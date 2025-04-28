import Button from '@/app/components/button';
import DAO from '@/DAO/Interface';
import MockDAO from '@/DAO/MockDAO';
import Book from '@/MockData/Book';
import { faArrowUp, faBookmark, faDownload, faSave, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

async function Detail({ params }: { params: Promise<{ id: string }> }) {
    const IDao: DAO = new MockDAO();
    const books = await IDao.getAllBooks();

    const { id } = await params;
    const bookID = Number(id);


    return (
        <>
            <div className="grid grid-cols-2 px-20 pt-60 gap-x-10 gap-y-10 pb-10">
                <div className="">
                    <h1 className="text-[1.5rem] font-bold mb-10">Description</h1>
                    <p className='text-[1.1rem]'>{books[bookID].description}</p>
                </div>
                <div className="">
                    <h1 className="text-[1.5rem] font-bold mb-10">Editor</h1>
                    <p className='text-[1.1rem]'>Random House World; First Edition (Novemver 20, 2018)</p>
                </div>
                <div className="col-start-2">
                    <h1 className="text-[1.5rem] font-bold mb-10">Languange</h1>
                    <p className='text-[1.1rem]'>Standard English (US and UK)</p>
                </div>
                <div className="col-start-2">
                    <h1 className="text-[1.5rem] font-bold mb-10">Hardcover</h1>
                    <p className='text-[1.1rem]'>
                        736 pages <br /> ISBN-10: 1234567890 <br /> ISBN-13: 123456789123
                    </p>
                </div>
            </div>

            <div className="absolute w-full top-[-25%] transform-[translateY(50%)] grid grid-cols-[30%_1fr] px-20">
                <img src={books[bookID].image} className="object-cover w-[200px] shadow-2xl rounded-[10]" />

                <div className="row-span-2 flex flex-col justify-between">
                    <h1 className='font-bold text-[1.5rem]'>{books[bookID].author}</h1>
                    <p className='text-[1.1rem]'>{books[bookID].description}</p>
                    <div className="flex items-center justify-between">
                        <Button comp="a" href="" content="Start Reading" icon={faArrowUp} primary />
                        <ul className="flex flex-1 justify-end">
                            <li className='rounded-[50] bg-[#F9F6EE] mr-5 '>
                                <FontAwesomeIcon icon={faBookmark} className='text-[20px]' />
                            </li>
                            <li className='rounded-[50] bg-[#F9F6EE] mr-5 '>
                                <FontAwesomeIcon icon={faShare} className='text-[20px]' />
                            </li>
                            <li className='rounded-[50] bg-[#F9F6EE] mr-5 '>
                                <FontAwesomeIcon icon={faDownload} className='text-[20px]' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
