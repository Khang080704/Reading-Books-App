import DAO from '@/DAO/Interface';
import MockDAO from '@/DAO/MockDAO';
import Book from '@/MockData/Book';

async function Detail({ params }: { params: Promise<{ id: string }> }) {
    const IDao: DAO = new MockDAO();
    const books = await IDao.getAllBooks();

    const {id} = await params
    console.log(books)
    console.log(id)

    // const router = useRouter()
    // const id = Number(router.query)
    // console.log(id)

    return (
        <div>
            detail page
            {books[Number(id)].name}
        </div>
    );
}

export default Detail;
