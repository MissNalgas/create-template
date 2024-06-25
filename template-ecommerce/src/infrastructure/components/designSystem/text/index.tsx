import styled from '@emotion/styled';
import type { ThemeColors } from '@/infrastructure/theme';

interface TextProps {
	color?: keyof ThemeColors;
}

export const Text = styled.span<TextProps>`
	color: ${(props) => props.theme.colors[props.color || 'neutral900']};
`;
