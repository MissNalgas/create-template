'use client';

import { IProduct } from '@/domain/models/product';
import Grid from '@/infrastructure/components/grid';
import Topbar from '@/infrastructure/components/topbar';

export default function HomePresentation({ products }: HomePresentationProps) {
	return (
		<main className="flex flex-col gap-small">
			<Topbar />
			<div className="w-full max-w-screen-lg mx-auto">
				<h1 className="text-2xl font-bold">Some promotion</h1>
			</div>
			<Grid products={products} />
		</main>
	);
}

interface HomePresentationProps {
	products: IProduct[];
}
