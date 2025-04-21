class Book {
    private _id: number
    private _name: string
    private _description: string
    private _image: string
    private _author: string
    private _preface: string


    public constructor(id: number, name: string, des: string, img: string, author: string, preface: string) {
        this._id = id
        this._name = name
        this._description = des
        this._image = img
        this._author = author
        this._preface = preface
    }

    public get id() {
        return this._id
    }

    public get name() {
        return this._name
    }

    public get image() {
        return this._image
    }

    public get description() {
        return this._description
    }

    public get author() {
        return this._author
    }

    public get preface() {
        return this._preface
    }
}

export default Book