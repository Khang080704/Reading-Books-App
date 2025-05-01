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
            <div className="grid grid-cols-2 px-20 pt-60 gap-x-10 gap-y-10 pb-10 max-md:px-1 max-md:gap-x-6">
                <div className="">
                    <h1 className="text-[1.5rem] font-bold mb-10 max-md:text-[1.2rem]">Description</h1>
                    <p className="text-[1.0rem] max-md:text-[1.0rem] ">{books[bookID].description}</p>
                </div>
                <div className="">
                    <h1 className="text-[1.5rem] font-bold mb-10 max-md:text-[1.2rem]">Editor</h1>
                    <p className="text-[1.0rem] max-md:text-[1.0rem]">
                        {books[bookID].publisher}
                    </p>
                </div>
                <div className="col-start-2">
                    <h1 className="text-[1.5rem] font-bold mb-10 max-md:text-[1.2rem]">Languange</h1>
                    <p className="text-[1.0rem] max-md:text-[1.0rem]">{books[bookID].language}</p>
                </div>
                <div className="col-start-2">
                    <h1 className="text-[1.5rem] font-bold mb-10 max-md:text-[1.2rem]">Hardcover</h1>
                    <p className="text-[1.0rem] max-md:text-[1.0rem]">
                        {books[bookID].pageNum} pages <br /> ISBN-10: {books[bookID].ISBN_10} <br /> ISBN-13: {books[bookID].ISBN_13}
                    </p>
                </div>

                <div
                    className="absolute w-full h-[var(--detail-page-height)] top-[-20%] transform-[translateY(50%)] grid grid-cols-[30%_1fr] left-0 px-20
                max-md:px-1 max-md:grid-cols-2 max-md:h-[var(--detail-page-height-mobile)] max-md:top-[-30%]"
                >
                    <div className="flex items-start max-md:mr-4">
                        <img src={books[bookID].image} className="object-contain w-[200px] shadow-2xl rounded-[10]" />
                    </div>

                    <div className="row-span-2 flex flex-col justify-between">
                        <h1 className="font-bold text-[1.5rem] max-md:text-[1.2rem]">{books[bookID].author}</h1>
                        <p className="text-[1.1rem] max-md:text-[0.8rem]">{books[bookID].description}</p>
                        <div className="flex items-center justify-between max-md:flex-col">
                            <Button comp="a" href="" content="Start Reading" icon={faArrowUp} primary />
                            <ul className="flex flex-1 justify-end max-md:mt-4">
                                <li className="rounded-[50] bg-[#F9F6EE] mr-5 ">
                                    <FontAwesomeIcon icon={faBookmark} className="text-[20px]" />
                                </li>
                                <li className="rounded-[50] bg-[#F9F6EE] mr-5 ">
                                    <FontAwesomeIcon icon={faShare} className="text-[20px]" />
                                </li>
                                <li className="rounded-[50] bg-[#F9F6EE] mr-5 ">
                                    <FontAwesomeIcon icon={faDownload} className="text-[20px]" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
