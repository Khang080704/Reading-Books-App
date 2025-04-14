import Book from "@/MockData/Book"
import User from "@/MockData/data"

abstract class DAO {
    public abstract getAllBooks(): Book[];
    public abstract getAllUsers(): User[];
}

export default DAO