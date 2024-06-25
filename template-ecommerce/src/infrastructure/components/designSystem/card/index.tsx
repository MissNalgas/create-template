import styled from '@emotion/styled';
import { ThemeColors } from '../../../theme/colors';

interface CardProps {
	color?: keyof ThemeColors;
}

export const Card = styled.div<CardProps>`
	background: ${(props) => props.theme.colors[props.color || 'neutral0']};
`;
