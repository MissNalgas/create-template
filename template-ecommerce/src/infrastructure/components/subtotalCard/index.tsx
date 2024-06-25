import { Divider } from '@mantine/core';
import CouponInput from '../couponInput';
import { Card, Text } from '../designSystem';
import { Button } from '../button';
import { useShoppingCartTotal } from '@/infrastructure/store/shoppingCart';
import NumberFormatter from '../numberFormatter';

export default function SubtotalCard() {
	const total = useShoppingCartTotal();

	return (
		<Card className="border rounded-xl p-medium flex flex-col gap-medium sticky top-20 right-0">
			<Card className="flex justify-between">
				<Text className="text-lg font-semibold">Subtotal</Text>
				<Text className="text-lg font-semibold">
					<NumberFormatter value={total} />
				</Text>
			</Card>
			<CouponInput
				submitText="Aplicar"
				label="Código de descuento"
				placeholder="ABC123"
			/>
			<Card className="flex justify-between">
				<Text color="neutral600" className="text-lg font-semibold">
					Envío
				</Text>
				<Text color="neutral600" className="text-lg font-semibold">
					$10.00
				</Text>
			</Card>
			<Divider />
			<Card className="flex justify-between">
				<Text className="text-lg font-semibold">Total</Text>
				<Text className="text-lg font-semibold">$130.00</Text>
			</Card>
			<Button>Ir a pagar</Button>
		</Card>
	);
}
