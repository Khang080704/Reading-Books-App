import User from '@/MockData/data';
import DAO from './Interface';
import Book from '@/MockData/Book';
import { BookDTO } from './Interface';

class MockDAO extends DAO {
    public async getAllBooks(): Promise<BookDTO[]> {
        var result: Book[] = [
            new Book(
                0,
                "Harry Potter and the Philosopher's Stone",
                'J.K. Rowling',
                223,
                1997,
                "Harry discovers he's a wizard and begins his journey at Hogwarts.",
                'A compelling start to one of the most beloved series in modern literature.',
                'English',
                '0747532699',
                '9780747532699',
                'Bloomsbury',
                'https://m.media-amazon.com/images/I/91eopoUCjLL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                1,
                'Harry Potter and the Chamber of Secrets',
                'J.K. Rowling',
                251,
                1998,
                'Harry returns to Hogwarts and uncovers the legend of the Chamber of Secrets.',
                "Rowling's clever plot and magical world expand beautifully.",
                'English',
                '0747538492',
                '9780747538493',
                'Bloomsbury',
                'https://m.media-amazon.com/images/I/91u+AfDBxlL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                2,
                'Harry Potter and the Prisoner of Azkaban',
                'J.K. Rowling',
                317,
                1999,
                'Harry learns more about his family and a mysterious prisoner escapes.',
                'Darker and more intricate, Rowling deepens her magical universe.',
                'English',
                '0747542155',
                '9780747542155',
                'Bloomsbury',
                'https://m.media-amazon.com/images/I/91II+F1H7LL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                3,
                'Harry Potter and the Goblet of Fire',
                'J.K. Rowling',
                636,
                2000,
                'Harry faces dangerous challenges in the Triwizard Tournament.',
                'A thrilling midpoint that raises the stakes considerably.',
                'English',
                '074754624X',
                '9780747546245',
                'Bloomsbury',
                'https://m.media-amazon.com/images/I/91VsMogZpwL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                4,
                'Harry Potter and the Order of the Phoenix',
                'J.K. Rowling',
                766,
                2003,
                'Harry struggles with prophecy and loss while leading Dumbledore’s Army.',
                'Emotionally complex and politically rich.',
                'English',
                '0747551006',
                '9780747551003',
                'Bloomsbury',
                'https://m.media-amazon.com/images/I/91bFQk3bMLL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                5,
                'Harry Potter and the Half-Blood Prince',
                'J.K. Rowling',
                607,
                2005,
                "Secrets of Voldemort's past are revealed as war looms closer.",
                "Rowling's storytelling matures with character depth and suspense.",
                'English',
                '0747581088',
                '9780747581086',
                'Bloomsbury',
                'https://m.media-amazon.com/images/I/91uNOz2Jm5L._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                6,
                'Harry Potter and the Deathly Hallows',
                'J.K. Rowling',
                607,
                2007,
                "Harry's final battle against Voldemort decides the fate of the wizarding world.",
                'An epic conclusion that satisfies in every way.',
                'English',
                '0747591059',
                '9780747591054',
                'Bloomsbury',
                'https://m.media-amazon.com/images/I/91WJ0q27ddL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            // A Song of Ice and Fire Series
            new Book(
                7,
                'A Game of Thrones',
                'George R.R. Martin',
                694,
                1996,
                'Noble houses vie for power in a land where summers span decades.',
                'Epic in scope and addictive in execution.',
                'English',
                '0553103547',
                '9780553103540',
                'Bantam',
                'https://m.media-amazon.com/images/I/81xf7GKNKTL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                8,
                'A Clash of Kings',
                'George R.R. Martin',
                768,
                1998,
                'Five kings war over the Iron Throne as ancient powers stir.',
                'Martin shows how fantasy can be gritty, political, and compelling.',
                'English',
                '0553108034',
                '9780553108033',
                'Bantam',
                'https://m.media-amazon.com/images/I/81Qo0E83U4L._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                9,
                'A Storm of Swords',
                'George R.R. Martin',
                973,
                2000,
                'Betrayals abound as alliances shift and war consumes Westeros.',
                'Arguably the best in the series. Heartbreaking and brilliant.',
                'English',
                '0553106635',
                '9780553106633',
                'Bantam',
                'https://m.media-amazon.com/images/I/81HBcDX72gL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book(
                10,
                'A Feast for Crows',
                'George R.R. Martin',
                753,
                2005,
                'The aftermath of war leaves the realm divided and vulnerable.',
                'Slow but richly detailed, revealing the world beneath the war.',
                'English',
                '0553801503',
                '9780553801507',
                'Bantam',
                'https://m.media-amazon.com/images/I/814C5-V4TRL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            new Book( 
                11,
                'A Dance with Dragons',
                'George R.R. Martin',
                1056,
                2011,
                'Jon Snow, Daenerys, and Tyrion face deadly threats from all sides.',
                'Dark, complex, and as unpredictable as ever.',
                'English',
                '0553801473',
                '9780553801477',
                'Bantam',
                'https://m.media-amazon.com/images/I/81Efwp1JNaL._AC_UY654_FMwebp_QL65_.jpg'
                
            ),

            // The Lord of the Rings Trilogy
            new Book(
                12,
                'The Fellowship of the Ring',
                'J.R.R. Tolkien',
                423,
                1954,
                'A hobbit carries a dark ring on a perilous quest to Mount Doom.',
                'The beginning of a timeless masterpiece.',
                'English',
                '0618574948',
                '9780618574940',
                'George Allen & Unwin',
                'https://m.media-amazon.com/images/I/71Ep7UNeTtL._SY522_.jpg'
                
            ),

            new Book(
                13,
                'The Two Towers',
                'J.R.R. Tolkien',
                352,
                1954,
                'The fellowship is broken and war spreads across Middle-earth.',
                "Tolkien's imagination and depth continue to astound.",
                'English',
                '0618574956',
                '9780618574957',
                'George Allen & Unwin',
                'https://m.media-amazon.com/images/I/71FXalNQFtL._SY522_.jpg'
                
            ),

            new Book(
                14,
                'The Return of the King',
                'J.R.R. Tolkien',
                416,
                1955,
                'The final battle for Middle-earth and the destruction of the One Ring.',
                'A fitting, majestic conclusion to a legendary saga.',
                'English',
                '0618574972',
                '9780618574971',
                'George Allen & Unwin',
                'https://m.media-amazon.com/images/I/71tDovoHA+L._SY522_.jpg'
            ),
        ];

        const plainBooks = result.map((book: Book) => {
            const obj: BookDTO = {
                id: book.id,
                name: book.name,
                description: book.description,
                image: book.image,
                author: book.author,
                preface: book.preface,
                pageNum: book.pageNum,
                publicYear: book.year,
                ISBN_10: book.ISBN_10,
                ISBN_13: book.ISBN_13,
                publisher: book.publisher,
                language: book.language
            };
            return obj;
        });

        return plainBooks;
    }
}

export default MockDAO;
