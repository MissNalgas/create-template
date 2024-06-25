import React from 'react';
import { Text } from '../../designSystem';
import {
	IShoppingCartProduct,
	useShoppingCart,
} from '@/infrastructure/store/shoppingCart';
import { IconTrash } from '@tabler/icons-react';
import { colors } from '@/infrastructure/theme';
export default function ShoppingCartItem({ item }: ShoppingCartItemProps) {
	const removeItem = useShoppingCart((state) => state.removeProduct);

	return (
		<div className="flex gap-small">
			{/* eslint-disable-next-line */}
			<img
				className="object-cover w-24 rounded"
				src={item.product.image}
				alt={item.product.name}
			/>
			<div className="flex flex-col flex-1 justify-evenly">
				<div>
					<Text as="h2" className="font-bold">
						{item.product.name}
					</Text>
					<Text className="text-sm" color="neutral400">
						{item.product.category}
					</Text>
				</div>
				<Text>
					<Text color="neutral400">{item.count}x</Text> $
					{item.product.price} USD
				</Text>
			</div>
			<div>
				<button onClick={() => removeItem(item.product.id)}>
					<IconTrash color={colors.danger600} />
				</button>
			</div>
		</div>
	);
}

interface ShoppingCartItemProps {
	item: IShoppingCartProduct;
}
