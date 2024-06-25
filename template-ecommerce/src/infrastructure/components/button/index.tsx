import { ComponentPropsWithoutRef } from 'react';
import { ButtonBase, ButtonBaseProps, SecondaryButtonBase } from './styled';
import styled from '@emotion/styled';

export function Button({
	className = '',
	...props
}: ComponentPropsWithoutRef<'button'> & ButtonBaseProps) {
	return (
		<ButtonBase
			className={'rounded px-2 h-12 text-white transition ' + className}
			{...props}
		/>
	);
}

export function SecondaryButton({
	className = '',
	...props
}: ComponentPropsWithoutRef<'button'> & ButtonBaseProps) {
	return (
		<SecondaryButtonBase
			className={'border px-2 h-12 text-white transition ' + className}
			{...props}
		/>
	);
}

export const TextButton = styled.button`
	color: ${({ theme }) => theme.colors.primary600};
	text-decoration: underline;
`;
