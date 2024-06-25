import { IconPlus } from '@tabler/icons-react';
import { Button } from '../button';
import { Card, Text } from '../designSystem';
import AddressItem from './addressItem';
import { Divider } from '@mantine/core';
import { Fragment } from 'react';

export default function AddressList({ onAddAddress }: AddressListProps) {
	return (
		<Card>
			<Button
				onClick={onAddAddress}
				className="flex items-center gap-small"
			>
				<IconPlus />
				<Text color="neutral0">Añadir nueva dirección</Text>
			</Button>
			<Card className="flex flex-col gap-medium my-medium">
				{Array(10)
					.fill(null)
					.map((_, i) => (
						<Fragment key={i}>
							<AddressItem />
							{i !== 9 && <Divider />}
						</Fragment>
					))}
			</Card>
		</Card>
	);
}
interface AddressListProps {
	onAddAddress?: () => void;
}
