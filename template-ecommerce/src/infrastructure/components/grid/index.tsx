import { IProduct } from '@/domain/models/product';
import ProductCard from '../productCard';
import {
	ItemCartComponent,
	useCartAnimation,
} from '@/infrastructure/providers/cartAnimation';
import { useShoppingCart } from '@/infrastructure/store/shoppingCart';
import { useRouter } from 'next/navigation';
import { useContainerSize } from '@/infrastructure/hooks';
import { useLayoutEffect, useState } from 'react';
import { spacing } from '@/infrastructure/theme';

const CARD_WIDTH = 240;
const GAP_WIDTH = spacing.medium;

export default function Grid({ products }: GridProps) {
	const { animate } = useCartAnimation();
	const router = useRouter();
	const addToCart = useShoppingCart((state) => state.addProduct);
	const handleProductClick = (key: string, product: IProduct) => () => {
		animate(key);
		addToCart(product);
	};
	const [size, ref] = useContainerSize<HTMLDivElement>();
	const [colCount, setColCount] = useState(0);

	useLayoutEffect(() => {
		const cols = Math.floor(
			(size.width + GAP_WIDTH) / (CARD_WIDTH + GAP_WIDTH),
		);
		setColCount(cols);
	}, [size]);

	return (
		<div
			ref={ref}
			style={{
				gridTemplateColumns: colCount
					? `repeat(${colCount}, 1fr)`
					: undefined,
			}}
			className="grid mx-auto gap-medium w-full max-w-screen-xl flex-1 p-medium"
		>
			{products.map((item, i) => (
				<div className="flex justify-center" key={i}>
					<ItemCartComponent customKey={`grid-${i}`}>
						<ProductCard
							width={CARD_WIDTH}
							product={item}
							onAddProduct={handleProductClick(`grid-${i}`, item)}
							onClick={() =>
								router.push(`/${item.category}/${item.id}`)
							}
						/>
					</ItemCartComponent>
				</div>
			))}
		</div>
	);
}
interface GridProps {
	products: IProduct[];
}
