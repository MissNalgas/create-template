'use client';
import { AuthProvider } from '../../auth';

export default function MainContainer({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <AuthProvider>{children}</AuthProvider>;
}
