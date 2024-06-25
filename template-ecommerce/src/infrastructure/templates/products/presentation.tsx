import { ICategory, IProduct } from '@/domain/models/product';
import Breadcrumbs from '@/infrastructure/components/breadcrumbs';
import Categories from '@/infrastructure/components/categories';
import { Card, Text } from '@/infrastructure/components/designSystem';
import Footer from '@/infrastructure/components/footer';
import Grid from '@/infrastructure/components/grid';
import Topbar from '@/infrastructure/components/topbar';
import Link from 'next/link';

export default function ProductsPresentation({
	products,
	categories,
}: ProductPresentationProps) {
	return (
		<Card>
			<Topbar />
			<Breadcrumbs className="mx-auto my-medium w-full max-w-screen-lg">
				<Link href="/">
					<Text className="hover:underline" color="neutral400">
						Home
					</Text>
				</Link>
				<Text className="font-bold">Productos</Text>
			</Breadcrumbs>
			<Card
				as="main"
				className="mx-auto my-extraLarge w-full max-w-screen-lg flex"
			>
				<Card className="w-64">
					<Categories categories={categories} />
				</Card>
				<Card className="flex-1">
					<Grid products={products} />
				</Card>
			</Card>
			<Footer />
		</Card>
	);
}
interface ProductPresentationProps {
	products: IProduct[];
	categories: ICategory[];
}
