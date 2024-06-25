'use client';

import { IBanner, IProduct } from '@/domain/models/product';
import Carousel, { CarouselImage } from '@/infrastructure/components/carousel';
import { Card } from '@/infrastructure/components/designSystem';
import Footer from '@/infrastructure/components/footer';
import Grid from '@/infrastructure/components/grid';
import ProductCarousel from '@/infrastructure/components/productsCarousel';
import Topbar from '@/infrastructure/components/topbar';

export default function HomePresentation({
	products,
	banners,
}: HomePresentationProps) {
	return (
		<Card className="flex flex-col">
			<Topbar />
			<Carousel
				items={banners}
				renderItem={(banner) => <CarouselImage src={banner.image} />}
				getKey={(banner) => banner.name + Math.random()}
				pagination
				navigation
			/>
			<Card
				as="main"
				className="w-full max-w-screen-xl mx-auto gap-extraLarge flex flex-col py-4"
			>
				<ProductCarousel products={products} title="Promociones" />
				<Grid products={products} />
			</Card>
			<Footer />
		</Card>
	);
}

interface HomePresentationProps {
	products: IProduct[];
	banners: IBanner[];
}
