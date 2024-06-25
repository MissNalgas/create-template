import { useContainerSize } from '@/infrastructure/hooks';
import Carousel from '../carousel';
import ProductCard from '../productCard';
import { useMemo, useRef } from 'react';
import type { SwiperRef } from 'swiper/react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Card, Text } from '../designSystem';
import { spacing } from '@/infrastructure/theme';
import { ButtonBase } from '../button/styled';
import {
	ItemCartComponent,
	useCartAnimation,
} from '@/infrastructure/providers/cartAnimation';
import { IProduct } from '@/domain/models/product';
import { useShoppingCart } from '@/infrastructure/store/shoppingCart';
import { useRouter } from 'next/navigation';

const GAP = spacing.normal;
const CARD_WIDTH = 240;

export default function ProductCarousel({
	title,
	products,
}: ProductCarouselProps) {
	const router = useRouter();
	const [{ width: containerWidth }, ref] = useContainerSize<HTMLDivElement>();
	const { animate } = useCartAnimation();
	const swiperRef = useRef<null | SwiperRef>(null);
	const addProduct = useShoppingCart((state) => state.addProduct);

	const columnCount = useMemo(() => {
		if (!containerWidth) return 0;

		const xPadding = spacing.normal * 2;
		const realContainerWidth = containerWidth - xPadding;

		const colCount = Math.floor(
			(realContainerWidth + GAP) / (CARD_WIDTH + GAP),
		);
		return colCount;
	}, [containerWidth]);

	const handleProductClick = (key: string, product: IProduct) => () => {
		animate(key);
		addProduct(product);
	};

	const nextPage = () => swiperRef.current?.swiper.slideNext(200);
	const prevPage = () => swiperRef.current?.swiper.slidePrev(200);

	return (
		<Card ref={ref} className="flex flex-col gap-4 p-normal">
			<div className="flex items-center justify-between">
				<Text as="h2" className="text-2xl font-semibold">
					{title}
				</Text>
				<div className="flex gap-small">
					<ButtonBase
						aria-label="Previous page of carousel"
						className="p-2 bg-buttonPrimary600 rounded transition hover:bg-primary700"
						onClick={prevPage}
					>
						<IconArrowLeft color="white" />
					</ButtonBase>
					<ButtonBase
						aria-label="Next page of carousel"
						className="p-2 bg-buttonPrimary600 rounded transition hover:bg-primary700"
						onClick={nextPage}
					>
						<IconArrowRight color="white" />
					</ButtonBase>
				</div>
			</div>
			<Carousel
				ref={swiperRef}
				slidesPerView={columnCount}
				items={products}
				renderItem={(item, i) => (
					<div className="flex justify-center">
						<ItemCartComponent customKey={`carousel-${i}`}>
							<ProductCard
								product={item}
								onClick={() =>
									router.push(`/${item.category}/${item.id}`)
								}
								onAddProduct={handleProductClick(
									`carousel-${i}`,
									item,
								)}
								width={CARD_WIDTH}
							/>
						</ItemCartComponent>
					</div>
				)}
				getKey={(_item, i) => i}
			/>
		</Card>
	);
}

interface ProductCarouselProps {
	title: string;
	products: IProduct[];
}
