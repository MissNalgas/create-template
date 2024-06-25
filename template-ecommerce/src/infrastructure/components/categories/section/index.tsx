import { IconChevronUp } from '@tabler/icons-react';
import { Card, Text } from '../../designSystem';
import { PropsWithChildren, useState } from 'react';
import { Collapse } from '@mantine/core';

export default function CategorySection({
	children,
	title,
}: PropsWithChildren<CategorySectionProps>) {
	const [isOpened, setIsOpened] = useState(true);

	return (
		<Card className="flex flex-col">
			<button
				onClick={() => setIsOpened((s) => !s)}
				className="flex p-small"
			>
				<Text className="flex-1 text-left font-semibold">{title}</Text>
				<IconChevronUp
					className="transition"
					style={{
						transform: isOpened
							? 'rotate(-180deg)'
							: 'rotate(0deg)',
					}}
				/>
			</button>
			<Collapse in={isOpened}>{children}</Collapse>
		</Card>
	);
}
interface CategorySectionProps {
	title: string;
}
