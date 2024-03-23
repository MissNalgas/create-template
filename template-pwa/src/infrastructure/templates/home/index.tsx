'use client';
import { useAuth } from '@/infrastructure/providers/auth';
import { useUserState } from '@/infrastructure/store/user';
import Link from 'next/link';

export default function HomeTemplate() {
	const user = useUserState((state) => state.user);
	const { logOut } = useAuth();

	return (
		<div className="flex items-center justify-center min-h-screen flex-col gap-2">
			<h1>Welcome {user}!!</h1>
			<button
				onClick={logOut}
				className="bg-slate-600 text-white px-2 h-8 rounded"
			>
				Log out
			</button>
			<Link href="/profile">Go to profile</Link>
		</div>
	);
}
