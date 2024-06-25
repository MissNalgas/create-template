import { useShoppingCart } from '@/infrastructure/store/shoppingCart';
import NumberFormatter from '../numberFormatter';
import CountSelector from '../countSelector';
import { IProduct } from '@/domain/models/product';
import CheckoutItemCard from './item';
import { IconTrash } from '@tabler/icons-react';
import { Card, IconButtonBase, Text } from '../designSystem';
import { Table } from '@mantine/core';
import { CustomTable } from './styled';

export default function CheckoutItems() {
	const products = useShoppingCart((state) => state.products);
	const addProduct = useShoppingCart((state) => state.addProduct);
	const removeItem = useShoppingCart((state) => state.removeProduct);

	const handleCounterChange =
		(product: IProduct, count: number) => (newCount: number) => {
			const diff = newCount - count;
			addProduct(product, diff);
		};

	const handleRemoveItem = (productId: string, count: number) => () => {
		removeItem(productId, count);
	};

	if (!products.length)
		return (
			<Card className="p-medium grid place-content-center">
				<Text as="p">No tienes productos en tu carrito</Text>
			</Card>
		);

	return (
		<CustomTable>
			<Table.Thead className="md:table-header-group hidden">
				<Table.Tr>
					<Table.Th>Productos</Table.Th>
					<Table.Th>Precio</Table.Th>
					<Table.Th>Cantidad</Table.Th>
					<Table.Th>Subtotal</Table.Th>
					<Table.Th></Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				{products.map(({ product, count }) => (
					<Table.Tr
						className="flex flex-col md:table-row"
						key={product.id}
					>
						<Table.Td>
							<CheckoutItemCard
								name={product.name}
								category={product.category}
								src={product.image}
							/>
						</Table.Td>
						<Table.Td data-header="Precio:">
							<NumberFormatter value={Number(product.price)} />
						</Table.Td>
						<Table.Td className="flex items-center justify-between gap-medium md:table-cell">
							<div className="flex-1">
								<CountSelector
									onChange={handleCounterChange(
										product,
										count,
									)}
									value={count}
									minValue={1}
								/>
							</div>
							<IconButtonBase
								onClick={handleRemoveItem(product.id, count)}
								className="bg-red-100 hover:bg-red-200 text-red-600 md:hidden"
							>
								<IconTrash />
							</IconButtonBase>
						</Table.Td>
						<Table.Td data-header="Subtotal:">
							<NumberFormatter
								value={count * Number(product.price)}
							/>
						</Table.Td>
						<Table.Td className="hidden md:table-cell">
							<IconButtonBase
								onClick={handleRemoveItem(product.id, count)}
								className="bg-red-100 hover:bg-red-200 text-red-600"
							>
								<IconTrash />
							</IconButtonBase>
						</Table.Td>
					</Table.Tr>
				))}
			</Table.Tbody>
		</CustomTable>
	);
}
