import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';
import MainContainer from '@/infrastructure/providers/container/mainContainer';
import { ColorSchemeScript } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'PWA Template',
	description: 'PWA Template',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#000000"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<ColorSchemeScript />
			</head>
			<body className={inter.className}>
				<MainContainer>{children}</MainContainer>
			</body>
		</html>
	);
}
