export interface IUserContext {
	logIn: (username: string) => void;
	logOut: () => void;
	isAuthenticated: boolean;
}
