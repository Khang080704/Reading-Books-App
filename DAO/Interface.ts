import Book from "@/MockData/Book"
import User from "@/MockData/data"

abstract class DAO {
    public abstract getAllBooks(): Promise<any[]>;
}

export interface BookDTO {
    id: number;
    name: string;
    description: string;
    image: string; 
    author: string;
    preface: string;
}

export default DAO