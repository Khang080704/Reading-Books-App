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
    pageNum: number;
    publicYear: number;
    ISBN_10: string;
    ISBN_13: string;
    publisher: string;
    language: string;
}

export default DAO