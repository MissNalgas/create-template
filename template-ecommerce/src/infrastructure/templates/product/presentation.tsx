'use client';
import { IProductDetail } from '@/domain/models/product';
import { Card } from '@/infrastructure/components/designSystem';
import Footer from '@/infrastructure/components/footer';
import ProductDetail from '@/infrastructure/components/productDetail';
import Topbar from '@/infrastructure/components/topbar';

import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function ProductPresentation({
	product,
}: ProductPresentationProps) {
	return (
		<PhotoProvider>
			<div>
				<Topbar />
				<Card
					as="main"
					className="w-full max-w-screen-lg mx-auto my-medium px-medium"
				>
					<ProductDetail product={product} />
				</Card>
				<Footer />
			</div>
		</PhotoProvider>
	);
}

interface ProductPresentationProps {
	product: IProductDetail;
}
