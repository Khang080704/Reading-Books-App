class User {
    private email: string;
    private password: string;
    private name: string;

    public constructor(email: string, password: string, name: string) {
        this.email = email
        this.password = password
        this.name = name
    }


    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }
    public getName(): string {
        return this.name
    }
}

export default User

export const users: readonly User[] = [
    new User('pgkhangt1@gmail.com', '123456', 'Khang Pham'),
    new User('ghue0806@gmail.com', '123456789', 'Gia Hue')
]