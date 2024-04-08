'use client';
import Button from '@/infrastructure/components/button';
import Link from 'next/link';
import { useAuth } from '@/infrastructure/providers/auth';
import { useUserState } from '@/infrastructure/store/user';

export default function HomeTemplate() {
	const user = useUserState((state) => state.user);
	const { logOut } = useAuth();

	return (
		<div className="flex items-center justify-center min-h-screen flex-col gap-2">
			<h1>Welcome {user}!!</h1>
			<Button onClick={logOut}>Log out</Button>
			<Link className="text-alternative600 underline" href="/profile">
				Go to profile
			</Link>
		</div>
	);
}
