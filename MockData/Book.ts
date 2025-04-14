class Book {
    private id: number
    private name: string
    private description: string

    public constructor(id: number, name: string, des: string) {
        this.id = id
        this.name = name
        this.description = des
    }

    public getBook(): Book {
        return this
    }
}

export default Book