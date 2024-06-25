import {
	IShoppingCartProduct,
	useShoppingCart,
} from '@/infrastructure/store/shoppingCart';
import React, { useMemo } from 'react';
import ShoppingCartItem from './cartItem';
import { Text } from '../designSystem';
import { Button } from '../button';
import { useRouter } from 'next/navigation';
import NumberFormatter from '../numberFormatter';

export function ShoppingCart({ cart }: ShoppingCartProps) {
	const router = useRouter();
	const subtotal = useMemo(() => {
		return cart.reduce((acc, item) => {
			return acc + item.count * Number(item.product.price);
		}, 0);
	}, [cart]);
	const shoppingCartProducts = useShoppingCart((state) => state.products);

	const buyItems = () => {
		router.push('/checkout');
	};

	return (
		<div className="flex flex-col gap-large max-h-96">
			<Text as="h1" className="font-semibold text-lg">
				Tu carrito
			</Text>
			<div className="flex flex-col gap-medium flex-1 overflow-y-auto pr-medium">
				{cart.length ? (
					cart.map((cartItem) => (
						<ShoppingCartItem
							key={cartItem.product.id}
							item={cartItem}
						/>
					))
				) : (
					<Text className="text-center">Tu carrito está vacío</Text>
				)}
			</div>
			<div className="border-t flex flex-col gap-small py-small">
				<div className="flex items-center justify-between">
					<Text color="neutral400" className="text-lg">
						Subtotal
					</Text>
					<Text className="font-bold text-lg">
						<NumberFormatter value={subtotal} />
					</Text>
				</div>
				<Button
					disabled={!shoppingCartProducts.length}
					onClick={buyItems}
					className="w-full"
				>
					Pagar
				</Button>
			</div>
		</div>
	);
}

interface ShoppingCartProps {
	cart: IShoppingCartProduct[];
}
