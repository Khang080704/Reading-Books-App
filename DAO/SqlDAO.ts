import User from "@/MockData/data";
import DAO from "./Interface";
import Book from "@/MockData/Book";



export class SqlDao extends DAO {
    public async getAllBooks(): Promise<Book[]> {
        var res = await fetch("https://potterapi-fedeperin.vercel.app/en/books")
        const result = await res.json() 
        return result
    }
}