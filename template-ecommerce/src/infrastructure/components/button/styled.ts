import { ThemeColors } from '@/infrastructure/theme';
import styled from '@emotion/styled';

export interface ButtonBaseProps {
	color?: keyof ThemeColors;
	hoverColor?: keyof ThemeColors;
}
export const ButtonBase = styled.button<ButtonBaseProps>`
	background: ${({ theme, color }) =>
		theme.colors[color || 'buttonPrimary600']};
	:hover {
		background: ${({ theme, hoverColor }) =>
			theme.colors[hoverColor || 'primary700']};
	}
	:disabled {
		background: ${({ theme }) => theme.colors.neutral200};
	}
`;

export const SecondaryButtonBase = styled.button`
	border-color: ${({ theme }) => theme.colors.primary600};
	:hover {
		border-color: ${({ theme }) => theme.colors.primary700};
	}
	:disabled {
		background: ${({ theme }) => theme.colors.neutral200};
	}
`;
