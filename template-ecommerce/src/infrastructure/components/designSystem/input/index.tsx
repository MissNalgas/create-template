import { TextInput as InputMantine } from '@mantine/core';

export function Input({
	size = 'md',
	radius = 'md',
	...props
}: ElementProps<typeof InputMantine>) {
	return <InputMantine size={size} radius={radius} {...props} />;
}
