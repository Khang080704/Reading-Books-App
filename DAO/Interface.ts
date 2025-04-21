import Book from "@/MockData/Book"
import User from "@/MockData/data"

abstract class DAO {
    public abstract getAllBooks(): Promise<Book[]>;
}

export default DAO