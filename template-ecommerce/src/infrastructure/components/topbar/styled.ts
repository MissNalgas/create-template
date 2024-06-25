import styled from '@emotion/styled';
import Link from 'next/link';

export const TopbarLink = styled(Link)`
	position: relative;
	padding: 4px;
	color: ${(props) => props.theme.colors.neutral900};
	::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		left: 0;
		bottom: 0;
		transition: 0.2s ease-out all;
		background: ${(props) => props.theme.colors.neutral900};
		border-radius: 1px;
	}
	:hover::after {
		width: 100%;
	}
`;
