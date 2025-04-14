import User from "@/MockData/data";
import DAO from "./Interface";
import Book from "@/MockData/Book";


class MockDAO extends DAO {
    public getAllBooks(): Book[] {
        var result: Book[] = [
            new Book(1, 'The world of ice and fire', 'Good'),
            new Book(2, 'Fire and blood', 'well'),
            new Book(3, 'Lord of the rings', 'Best'),
            new Book(4, 'Harry Potter', 'normal')
        ]
        return result
    }
    public getAllUsers(): User[] {
        var result: User[] = [
            new User('pgkhangt1@gmail.com', '123456', 'Khang Pham'),
            new User('ghue0806@gmail.com', '123456789', 'Gia Hue')
        ]
        return result
    }
}

export default MockDAO