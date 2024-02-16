import { IUser } from '../models/user';

export interface IUserRepository {
	getUser: () => Promise<IUser>;
}
