import { IProduct } from '@/domain/models/product';
import { Text } from '../designSystem';
import { ProductImg, ProductContainer } from './styled';
import { MouseEvent } from 'react';

export default function ProductCard({
	width,
	product,
	onAddProduct,
	onClick,
}: ProductCardProps) {
	const handleAddProduct = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		onAddProduct?.();
	};

	return (
		<ProductContainer
			style={{ width }}
			className="w-60 rounded-lg flex flex-col gap-2 cursor-pointer"
			onClick={onClick}
		>
			<div className="relative">
				<ProductImg
					className="h-40 w-full"
					src={product.image}
					alt={product.name}
				/>
				<button
					onClick={handleAddProduct}
					className="add-to-cart-button"
				>
					<Text>Añadir al carrito</Text>
				</button>
			</div>
			<div className="flex flex-col items-center justify-center">
				<Text className="text-sm">{product.category}</Text>
				<Text as="strong" className="font-semibold">
					{product.name}
				</Text>
				<Text className="text-sm">${product.price} usd</Text>
			</div>
		</ProductContainer>
	);
}

interface ProductCardProps {
	width?: number | string;
	onAddProduct?: () => void;
	onClick?: () => void;
	product: IProduct;
}
