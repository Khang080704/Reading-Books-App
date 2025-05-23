import DAO from './Interface';
import User from '@/MockData/data';

export class UserRepository {
    private static instance: UserRepository;
    private dao: DAO;

    private constructor(dao: DAO) {
        this.dao = dao;
    }

    static getInstance(dao?: DAO): UserRepository {
        if (!UserRepository.instance && dao) {
            UserRepository.instance = new UserRepository(dao);
        }
        return UserRepository.instance;
    }
}
