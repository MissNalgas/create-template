'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../../auth';

const queryClient = new QueryClient();

export default function MainContainer({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>{children}</AuthProvider>;
		</QueryClientProvider>
	);
}
