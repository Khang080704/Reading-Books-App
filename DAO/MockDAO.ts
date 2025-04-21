import User from '@/MockData/data';
import DAO from './Interface';
import Book from '@/MockData/Book';

class MockDAO extends DAO {

    public async getAllBooks(): Promise<Book[]> {
        var res = await fetch("https://potterapi-fedeperin.vercel.app/en/books")
        const result = await res.json()
        // var result: Book[] = [
        //     new Book(
        //         0,
        //         'The world of ice and fire',
        //         'NEW YORK TIMES BESTSELLER • Perfect for fans of A Song of Ice and Fire and HBOs Game of Thrones—an epic history of Westeros and the lands beyond, featuring hundreds of pages of all-new material from George R. R. Martin!',
        //         `https://i0.wp.com/www.paolopuggioni.com/admin/wp-content/uploads/2014/10/World-of-Ice-and-Fire-Cover2.jpg?w=400&ssl=1`,
        //         'G.R.R Martin',
        //         'If the past is prologue, then George R. R. Martin masterwork—the most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. At long last, it has arrived with The World of Ice & Fire',
        //     ),

        //     new Book(
        //         1,
        //         'Fire and blood',
        //         '#1 NEW YORK TIMES BESTSELLER • The history of the Targaryens comes to life in this masterly work, the inspiration for HBOs Game of Thrones prequel series House of the Dragon',
        //         'https://m.media-amazon.com/images/I/51UMrvtH1jL._SY445_SX342_.jpg',
        //         'G.R.R Martin',
        //         '“The thrill of Fire & Blood is the thrill of all Martins fantasy work: familiar myths debunked, the whole trope table flipped.”—Entertainment Weekly',
        //     ),

        //     new Book(
        //         2,
        //         'Lord of the rings: Fellowship of the ring',
        //         `The Fellowship of the Ring, the first volume in the trilogy, tells of the fateful power of the One Ring. It begins a magnificent tale of adventure that will plunge the members of the Fellowship of the Ring into a perilous quest and set the stage for the ultimate clash between the powers of good and evil.`,
        //         'https://pictures.abebooks.com/isbn/9780547928210-uk.jpg',
        //         'J.R.R Tolkien',
        //         '',
        //     ),
        //     new Book(
        //         3,
        //         'Harry Potter: Half blood prince',
        //         'normal',
        //         'https://cdn.shopify.com/s/files/1/0310/7487/7577/files/Y3600HarryPotterandtheHalf-BloodPrince_USROUNDED_780cd98e-ee46-4c8f-a40c-cccb0ace3cc5.png?v=1724246382',
        //         'J.K Rowling',
        //         '',
        //     ),

        //     new Book(
        //         4,
        //         'Lord of the rings: The Two Towers',
        //         `This brand-new unabridged audiobook of The Two Towers, the second part of J. R. R. Tolkien’s epic adventure The Lord of the Rings, is read by the BAFTA award-winning actor, director, and author Andy Serkis.`,
        //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlW9juBJwVAnrkXcvE-ai_4kNH-kAcxIiTA&s',
        //         'J.R.R Tolkien',
        //         '',
        //     ),

        //     new Book(
        //         5,
        //         'Lord of the rings: The return of the king',
        //         'Best',
        //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqi-pwUOeZ_wmji5LVn5htfSa-1shYch0NA&s',
        //         'J.R.R Tolkien',
        //         ' ',
        //     ),
        //     new Book(
        //         6,
        //         'A Game of thrones',
        //         'Best',
        //         'https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
        //         'G.R.R Martin',
        //         '',
        //     ),
        // ];
        return result;
    }
}

export default MockDAO;
