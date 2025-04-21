import Book from "@/MockData/Book"
import User from "@/MockData/data"

abstract class DAO {
    public abstract getAllBooks(): Promise<Book[]>;
    public abstract getAllUsers(): Promise<User[]>;
    public abstract addUser(user: User): Promise<void>
}

export default DAO