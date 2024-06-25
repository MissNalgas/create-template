import NumberFormatter from '../numberFormatter';
import { Card, Text } from '../designSystem';
import { IProductDetail } from '@/domain/models/product';
import ColorSelector from '../colorSelector';
import { useState } from 'react';
import CountSelector from '../countSelector';
import { Button } from '../button';
import ProductDescription from './description';
import ProductCarousel from '../productsCarousel';
import Link from 'next/link';
import {
	ItemCartComponent,
	useCartAnimation,
} from '@/infrastructure/providers/cartAnimation';
import {
	useShoppingCart,
	useShoppingCartHasItem,
} from '@/infrastructure/store/shoppingCart';
import PhotoViewer from '../photoViewer';
import Breadcrumbs from '../breadcrumbs';
import { useRouter } from 'next/navigation';

export default function ProductDetail({ product }: ProductDetailProps) {
	const [color, setColor] = useState(product.colors[0]);
	const [itemCount, setItemCount] = useState(0);
	const { animate } = useCartAnimation();
	const addToCart = useShoppingCart((state) => state.addProduct);
	const router = useRouter();
	const hasItem = useShoppingCartHasItem();

	const onAddToCart = () => {
		animate(product.id);
		addToCart(
			{
				...product,
				image: product.images[0],
			},
			itemCount,
		);
	};

	const onBuy = () => {
		if (!hasItem(product.id)) {
			addToCart(
				{
					...product,
					image: product.images[0],
				},
				itemCount,
			);
		}

		router.push('/checkout');
	};

	return (
		<Card className="flex flex-col gap-extraLarge">
			<Breadcrumbs>
				<Link href="/products">
					<Text color="neutral400" className="hover:underline">
						{product.category}
					</Text>
				</Link>
				<Text>{product.name}</Text>
			</Breadcrumbs>
			<Card className="grid grid-cols-1 sm:grid-cols-2">
				<ItemCartComponent customKey={product.id}>
					<PhotoViewer alt={product.name} images={product.images} />
				</ItemCartComponent>
				<Card className="p-medium flex flex-col gap-medium">
					<Text className="font-semibold text-2xl">
						{product.name}
					</Text>
					<Text>{product.category}</Text>
					<Text className="font-semibold">
						<NumberFormatter value={Number(product.price)} />
					</Text>
					<Text color="neutral400" className="text-sm">
						{product.description}
					</Text>
					<ColorSelector
						values={product.colors}
						value={color}
						onChange={setColor}
					/>
					<Card className="flex items-center gap-small">
						<CountSelector
							value={itemCount}
							onChange={setItemCount}
							minValue={1}
						/>
						<Button onClick={onAddToCart} className="flex-1">
							Añadir al carrito
						</Button>
					</Card>
					<Button onClick={onBuy} className="w-full">
						Comprar ahora
					</Button>
				</Card>
			</Card>
			<ProductDescription />
			<ProductCarousel
				title="Productos relacionados"
				products={Array(4).fill({
					...product,
					image: product.images[0],
				})}
			/>
		</Card>
	);
}
interface ProductDetailProps {
	product: IProductDetail;
}
