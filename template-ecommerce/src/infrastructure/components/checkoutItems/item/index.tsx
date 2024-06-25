import { Image } from '@mantine/core';
import { Card, Text } from '../../designSystem';

export default function CheckoutItemCard({
	src,
	name,
	category,
}: CheckoutItemCardProps) {
	return (
		<Card className="flex gap-small">
			<Image
				radius="md"
				className="w-28 h-28 min-w-28 object-cover block"
				src={src}
				alt={name}
			/>
			<Card className="flex flex-col justify-center">
				<Text className="text-lg font-semibold" as="h1">
					{name}
				</Text>
				<Text color="neutral400">{category}</Text>
			</Card>
		</Card>
	);
}
interface CheckoutItemCardProps {
	src: string;
	name: string;
	category: string;
}
