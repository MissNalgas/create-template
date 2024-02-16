import { IUserRepository } from '@/domain/repository/user';
import { IHttpApi } from '../models/http';
import { api } from './api';

class UserService implements IUserRepository {
	constructor(private api: IHttpApi) {}

	async getUser() {
		const token = localStorage.getItem('token');
		if (!token) throw new Error('Invalid token');

		const user = await this.api.get<any>('/users/1');

		return user.data.firstName + ' ' + user.data.lastName;
	}
}

export const userService = new UserService(api);
