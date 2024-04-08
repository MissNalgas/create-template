import { IUser } from '@/domain/models/user';
import { create } from 'zustand';

export enum AuthenticatedState {
	PENDING = 'pending',
	AUTHENTICATED = 'authenticated',
	UNAUTHENTICATED = 'unauthenticated',
}

interface IUserState {
	user: IUser;
	state: AuthenticatedState;
	setUser: (user: IUser) => void;
}

export const useUserState = create<IUserState>((set) => ({
	user: '',
	state: AuthenticatedState.PENDING,
	setUser(user) {
		//validate if user is valid value
		if (user) {
			set({
				user,
				state: AuthenticatedState.AUTHENTICATED,
			});
		} else {
			set({
				user,
				state: AuthenticatedState.UNAUTHENTICATED,
			});
		}
	},
}));
