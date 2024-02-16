import { usePathname, useRouter } from 'next/navigation';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	DEFAULT_PUBLIC_ROUTE,
	PUBLIC_ROUTES,
	DEFAULT_PRIVATE_ROUTE,
} from './const';
import { useUserState } from '@/infrastructure/store/user';
import { IUserContext } from './models';
import { userService } from '@/application/services/user';
import Loading from '@/infrastructure/components/loading';

const authContext = createContext<IUserContext>({
	isAuthenticated: false,
	logIn: () => {},
	logOut: () => {},
});

export function useAuth() {
	return useContext(authContext);
}

export function AuthProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const pathname = usePathname();
	const router = useRouter();
	const { user, setUser } = useUserState();
	const [isLoading, setIsLoading] = useState(true);
	const [hasHandledRedirect, setHasHandledRedirect] = useState(false);

	const isAuthenticated = useMemo(() => !!user, [user]);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		userService
			.getUser()
			.then((user) => {
				setUser(user);
			})
			.catch(() => setUser(''))
			.finally(() => setIsLoading(false));
	}, [setUser]);

	useEffect(() => {
		if (PUBLIC_ROUTES.some((route) => route.test(pathname))) {
			if (isAuthenticated) {
				router.replace(DEFAULT_PRIVATE_ROUTE);
			}
		} else {
			if (!isAuthenticated) {
				router.replace(DEFAULT_PUBLIC_ROUTE);
			}
		}
		setTimeout(() => {
			setHasHandledRedirect(true); // This is to ensure the router has been updated before showing the content
		}, 500);
	}, [pathname, router, isAuthenticated]);

	const logIn = useCallback(
		async (username: string) => {
			window.localStorage.setItem('token', username);
			const user = await userService.getUser();
			setUser(user);
		},
		[setUser],
	);

	const logOut = useCallback(() => {
		window.localStorage.removeItem('token');
		setUser('');
		router.replace(DEFAULT_PUBLIC_ROUTE);
	}, [setUser, router]);

	const value = useMemo(
		() => ({
			isAuthenticated,
			logIn,
			logOut,
		}),
		[logIn, logOut, isAuthenticated],
	);

	return (
		<authContext.Provider value={value}>
			{isLoading || !hasHandledRedirect ? <Loading /> : children}
		</authContext.Provider>
	);
}
