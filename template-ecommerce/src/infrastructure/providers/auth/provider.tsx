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
	MIXED_ROUTES,
} from './const';
import { AuthenticatedState, useUserState } from '@/infrastructure/store/user';
import { IUserContext } from './models';
import { userService } from '@/application/services/user';
import Loading from '@/infrastructure/components/loading';

const authContext = createContext<IUserContext>({
	authState: AuthenticatedState.PENDING,
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
	const { setUser, state: authState } = useUserState();
	const [isValidRoute, setIsValidRoute] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		userService
			.getUser()
			.then((user) => {
				setUser(user);
			})
			.catch(() => setUser(''));
	}, [setUser]);

	useEffect(() => {
		if (MIXED_ROUTES) {
			setIsValidRoute(true);
		} else if (PUBLIC_ROUTES.some((route) => route.test(pathname))) {
			if (authState === AuthenticatedState.AUTHENTICATED) {
				router.replace(DEFAULT_PRIVATE_ROUTE);
			} else if (authState === AuthenticatedState.UNAUTHENTICATED) {
				setIsValidRoute(true);
			}
		} else {
			if (authState === AuthenticatedState.UNAUTHENTICATED) {
				router.replace(DEFAULT_PUBLIC_ROUTE);
			} else if (authState === AuthenticatedState.AUTHENTICATED) {
				setIsValidRoute(true);
			}
		}
	}, [pathname, router, authState]);

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
		router.replace(DEFAULT_PUBLIC_ROUTE);
		setUser('');
	}, [setUser, router]);

	const value = useMemo(
		() => ({
			authState,
			logIn,
			logOut,
		}),
		[logIn, logOut, authState],
	);

	return (
		<authContext.Provider value={value}>
			{authState === AuthenticatedState.PENDING || !isValidRoute ? (
				<Loading />
			) : (
				children
			)}
		</authContext.Provider>
	);
}
