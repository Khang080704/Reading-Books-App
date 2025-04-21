import DAO from '@/DAO/Interface';
import MockDAO from '@/DAO/MockDAO';
import Book from '@/MockData/Book';

async function Detail({ params }: { params: Promise<{ id: string }> }) {
    const IDao: DAO = new MockDAO();
    const books = IDao.getAllBooks();

    const {id} = await params
    console.log(id)

    // const router = useRouter()
    // const id = Number(router.query)
    // console.log(id)

    const book: Book = books.filter((item) => {
        return item.id == Number(id)
    })[0]

    return (
        <div>
            detail page
            <p>{book.name}</p>
        </div>
    );
}

export default Detail;
