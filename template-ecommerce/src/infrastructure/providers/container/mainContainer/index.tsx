'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../../auth';
import { ThemeProvider } from '@emotion/react';
import { colors, spacing } from '@/infrastructure/theme';
import { CartAnimationProvider } from '../../cartAnimation';
import { MantineProvider, createTheme } from '@mantine/core';

const queryClient = new QueryClient();

const mantineTheme = createTheme({
	colors: {
		primary: [
			colors.primary100,
			colors.primary100,
			colors.primary200,
			colors.primary200,
			colors.primary500,
			colors.primary600,
			colors.primary700,
			colors.primary700,
			colors.primary700,
			colors.primary700,
		],
	},
	primaryColor: 'primary',
});

export default function MainContainer({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<MantineProvider theme={mantineTheme}>
			<ThemeProvider theme={{ colors, spacing }}>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<CartAnimationProvider>
							{children}
						</CartAnimationProvider>
					</AuthProvider>
				</QueryClientProvider>
			</ThemeProvider>
		</MantineProvider>
	);
}
