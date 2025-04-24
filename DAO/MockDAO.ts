import User from '@/MockData/data';
import DAO from './Interface';
import Book from '@/MockData/Book';
import { BookDTO } from './Interface';

class MockDAO extends DAO {

    public async getAllBooks(): Promise<BookDTO[]> {
        var result: Book[] = [
            new Book(
                0,
                'Harry Potter and the Philosopher Stone',
                "Harry discovers he's a wizard and attends Hogwarts, where he begins to learn magic and uncovers a dark secret.",
                "https://m.media-amazon.com/images/I/61Ddo7TSTCL._SX342_SY445_.jpg",
                'J.K. Rowling',
                "A richly imagined world full of magic and adventure."
            ),
            new Book(
                1,
                "Harry Potter and the Chamber of Secrets",
                "Harry returns to Hogwarts and uncovers the mystery behind a series of attacks linked to an ancient secret chamber.",
                "https://m.media-amazon.com/images/I/61XGdLECZ5L._SX342_SY445_.jpg",
                'J.K. Rowling',
                "A richly imagined world full of magic and adventure."
            ),
            new Book(
                2,
                "Harry Potter and the Prisoner of Azkaban",
                "Harry learns more about his past as a dangerous prisoner escapes and secrets about his parents emerge.",
                "https://m.media-amazon.com/images/I/61mc3mRBvoL._SX342_SY445_.jpg",
                'J.K. Rowling',
                "Rowling's storytelling reaches new depths in this gripping third installment."
            ),
            new Book(
                3,
                "Harry Potter and the Goblet of Fire",
                "Harry competes in a dangerous magical tournament and confronts the return of Voldemort.",
                "https://m.media-amazon.com/images/I/81aTxTMB33L._SY522_.jpg",
                'J.K. Rowling',
                "A turning point in the series, both in tone and stakes."
            ),
            new Book(
                4,
                "Harry Potter and the Order of the Phoenix",
                "Harry faces growing threats, forms Dumbledore's Army, and battles political interference at Hogwarts.",
                "https://m.media-amazon.com/images/I/61XGdLECZ5L._SX342_SY445_.jpg",
                'J.K. Rowling',
                "Emotionally rich and politically charged."
            ),
            new Book(
                5,
                "Harry Potter and the Half-Blood Prince",
                "Dark secrets are revealed as Harry learns about Voldemort's past and prepares for the final battle.",
                "https://m.media-amazon.com/images/I/61XGdLECZ5L._SX342_SY445_.jpg",
                'J.K. Rowling',
                "Mature, mysterious, and masterfully written."
            )
        ];

        const plainBooks = result.map((book: Book) => {
            const obj: BookDTO = {
                id: book.id,
                name: book.name,
                description: book.description,
                image: book.image,
                author: book.author,
                preface: book.preface
            }
            return obj
        });

        return plainBooks;
    }
}

export default MockDAO;
