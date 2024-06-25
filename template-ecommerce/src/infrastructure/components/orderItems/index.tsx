import { Table } from '@mantine/core';
import { Card } from '../designSystem';
import NumberFormatter from '../numberFormatter';
import { TextButton } from '../button';
import { randomInt } from '@/utils';

const items = Array(8)
	.fill(null)
	.map((_, i) => ({
		id: i,
		subtotal: (i + 1) * 3000,
		date: new Date(Date.now() - randomInt(1000 * 60 * 60 * 24 * 30)),
	}));

export default function OrderItems() {
	return (
		<Card>
			<Table>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Productos</Table.Th>
						<Table.Th>Fecha</Table.Th>
						<Table.Th>Total</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{items.map((item) => (
						<Table.Tr key={item.id}>
							<Table.Td>
								<TextButton>Ver productos</TextButton>
							</Table.Td>
							<Table.Td>
								{item.date.toLocaleString('es-ES')}
							</Table.Td>
							<Table.Td>
								<NumberFormatter value={item.subtotal} />
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Card>
	);
}
