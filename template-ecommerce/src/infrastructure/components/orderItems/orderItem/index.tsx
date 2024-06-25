import { Table } from '@mantine/core';
import { Card } from '../../designSystem';

export default function OrderItem() {
	return (
		<Card>
			<Table>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Productos</Table.Th>
						<Table.Th>Total</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody></Table.Tbody>
			</Table>
		</Card>
	);
}
