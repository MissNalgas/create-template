import styled from '@emotion/styled';

interface ColorSwatchButtonProps {
	active: boolean;
}
export const ColorSwatchButton = styled.button<ColorSwatchButtonProps>`
	outline-color: ${({ theme, active }) =>
		active ? theme.colors.primary600 : 'transparent'};
	border-radius: 50%;
`;
