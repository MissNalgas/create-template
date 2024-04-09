import { AuthenticatedState } from '@/infrastructure/store/user';

export interface IUserContext {
	logIn: (username: string) => void;
	logOut: () => void;
	authState: AuthenticatedState;
}
