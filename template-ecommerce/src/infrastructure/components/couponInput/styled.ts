import styled from '@emotion/styled';

export const SubmitButton = styled.button`
	background: ${({ theme }) => theme.colors.primary600};
	color: ${({ theme }) => theme.colors.neutral100};
	padding: ${({ theme }) =>
		`${theme.spacing.normal}px ${theme.spacing.small}px`};
	transition: all 0.2s ease-out;
	&:hover {
		background: ${({ theme }) => theme.colors.primary700};
	}
`;
