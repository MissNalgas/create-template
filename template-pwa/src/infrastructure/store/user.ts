import { IUser } from '@/domain/models/user';
import { create } from 'zustand';

interface IUserState {
	user: IUser;
	setUser: (user: string) => void;
}

export const useUserState = create<IUserState>((set) => ({
	user: '',
	setUser(user) {
		set({ user });
	},
}));
