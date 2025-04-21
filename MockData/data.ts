class User {
    private _email: string;
    private _password: string;
    private _name: string;

    public constructor(email: string, password: string, name: string) {
        this._email = email
        this._password = password
        this._name = name
    }

    public get email() {
        return this._email
    }
    public get password() {
        return this._password
    }
    public get name() {
        return this._name
    }
}

export default User

export const users: readonly User[] = [
    new User('pgkhangt1@gmail.com', '123456', 'Khang Pham'),
    new User('ghue0806@gmail.com', '123456789', 'Gia Hue')
]