import { NumberFormatter as MantineNumberFormatter } from '@mantine/core';
export default function NumberFormatter(
	props: ElementProps<typeof MantineNumberFormatter>,
) {
	return (
		<MantineNumberFormatter
			decimalSeparator=","
			thousandSeparator="."
			prefix="$"
			{...props}
		/>
	);
}
