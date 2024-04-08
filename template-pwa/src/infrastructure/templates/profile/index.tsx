'use client';
import Link from 'next/link';
import { useAuth } from '@/infrastructure/providers/auth';

export default function ProfileTemplate() {
	const { authState } = useAuth();

	return (
		<main className="flex items-center justify-center min-h-screen flex-col">
			<h1>Profile</h1>
			<Link className="text-alternative600 underline" href="/">
				go to home
			</Link>
			<ul>
				<li>
					<b>Status: </b> {authState}
				</li>
			</ul>
		</main>
	);
}
