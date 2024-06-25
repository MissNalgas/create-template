import styled from '@emotion/styled';

interface ItemButtonProps {
	isActive: boolean;
}
export const ItemButton = styled.button<ItemButtonProps>`
	display: flex;
	width: 100%;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.small}px;
	padding: ${({ theme }) => theme.spacing.normal}px;
	background: ${({ theme, isActive }) =>
		isActive ? theme.colors.primary600 : theme.colors.neutral0};
	color: ${({ theme, isActive }) =>
		isActive ? theme.colors.neutral0 : theme.colors.neutral900};
	&:hover {
		background: ${({ theme, isActive }) =>
			isActive ? theme.colors.primary700 : theme.colors.neutral100};
	}
`;
