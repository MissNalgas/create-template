import { IconMinus, IconPlus } from '@tabler/icons-react';
import { Card, Text } from '../designSystem';

export default function CountSelector({
	value,
	onChange,
	minValue,
}: CountSelectorProps) {
	const handleClick = (diff: number) => () => {
		let newValue = value + diff;
		if (typeof minValue === 'number' && newValue < minValue) {
			newValue = minValue;
		}
		onChange(newValue);
	};

	return (
		<Card className="grid grid-cols-3 border-2 rounded-lg border-black overflow-hidden">
			<button
				onClick={handleClick(-1)}
				className="p-2 transition hover:bg-neutral-100 grid place-content-center"
			>
				<IconMinus />
			</button>
			<Card className="grid place-content-center">
				<Text className="items-center">{value}</Text>
			</Card>
			<button
				onClick={handleClick(1)}
				className="p-2 transition hover:bg-neutral-100 grid place-content-center"
			>
				<IconPlus />
			</button>
		</Card>
	);
}

interface CountSelectorProps {
	value: number;
	onChange: (_newValue: number) => void;
	minValue?: number;
}
