class Book {
    private _id: number;
    private _name: string;
    private _description: string;
    private _image: string;
    private _author: string;
    private _preface: string;
    private _pageNum: number;
    private _publicYear: number;
    private _ISBN_10: string;
    private _ISBN_13: string;
    private _publisher: string;
    private _language: string;

    public constructor(
        id: number,
        name: string,
        author: string,
        page: number,
        year: number,
        des: string,
        preface: string,
        language: string,
        isbn_10: string,
        isbn_13: string,
        publisher: string,
        img: string,
    ) {
        this._id = id;
        this._name = name;
        this._description = des;
        this._image = img;
        this._author = author;
        this._preface = preface;
        this._pageNum = page;
        this._publicYear = year;
        this._ISBN_10 = isbn_10
        this._ISBN_13 = isbn_13
        this._publisher = publisher
        this._language = language
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get image() {
        return this._image;
    }

    public get description() {
        return this._description;
    }

    public get author() {
        return this._author;
    }

    public get preface() {
        return this._preface;
    }
    public get pageNum() {
        return this._pageNum
    }
    public get year() {
        return this._publicYear
    }
    public get ISBN_10() {
        return this._ISBN_10
    }
    public get ISBN_13() {
        return this._ISBN_13
    }
    public get publisher() {
        return this._publisher
    }
    public get language() {
        return this._language
    }
}

export default Book;
