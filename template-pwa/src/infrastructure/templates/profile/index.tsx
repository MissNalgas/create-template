'use client';
import { useAuth } from '@/infrastructure/providers/auth';
import Link from 'next/link';

export default function ProfileTemplate() {
	const { authState } = useAuth();

	return (
		<main>
			<h1>Profile</h1>
			<Link href="/">go to home</Link>
			<ul>
				<li>
					<b>Status: </b> {authState}
				</li>
			</ul>
		</main>
	);
}
