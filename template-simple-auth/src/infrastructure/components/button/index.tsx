import { ComponentPropsWithoutRef } from 'react';

export default function Button(props: ComponentPropsWithoutRef<'button'>) {
	return (
		<button
			className="bg-primary600 rounded px-2 h-8 text-white transition hover:bg-primary700"
			{...props}
		/>
	);
}
