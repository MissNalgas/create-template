import { IconPencil, IconPhone, IconTrash } from '@tabler/icons-react';
import { Card, IconButtonBase, Text } from '../../designSystem';

export default function AddressItem() {
	return (
		<Card className="flex justify-between items-center">
			<Card className="flex flex-col justify-between gap-small">
				<Text className="text-lg font-semibold">Nombre</Text>
				<Text className="text-sm">Address</Text>
				<Text className="flex gap-small items-center">
					<IconPhone />
					31233123131
				</Text>
			</Card>
			<Card className="flex gap-small items-center">
				<IconButtonBase className="bg-blue-300 text-blue-600 hover:bg-blue-400">
					<IconPencil />
				</IconButtonBase>
				<IconButtonBase className="bg-red-300 text-red-600 hover:bg-red-400">
					<IconTrash />
				</IconButtonBase>
			</Card>
		</Card>
	);
}
