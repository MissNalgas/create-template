import { Card } from '../designSystem';
import { ColorSwatchButton } from './styled';
import { ColorSwatch } from '@mantine/core';

export default function ColorSelector<T extends string>({
	values,
	value,
	onChange,
}: ColorSelectorProps<T>) {
	return (
		<Card className="flex items-center gap-small">
			{values.map((color) => (
				<ColorSwatchButton
					className="outline transition"
					active={color === value}
					key={color}
					onClick={() => onChange(color)}
				>
					<ColorSwatch color={color} />
				</ColorSwatchButton>
			))}
		</Card>
	);
}
interface ColorSelectorProps<T extends string> {
	values: ReadonlyArray<T>;
	onChange: (_newValue: T) => void;
	value: T;
}
