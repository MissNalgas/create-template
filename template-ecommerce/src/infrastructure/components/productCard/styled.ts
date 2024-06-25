import styled from '@emotion/styled';

export const ProductImg = styled.img`
	object-fit: cover;
	border-radius: 8px;
`;

export const ProductContainer = styled.div`
	.add-to-cart-button {
		opacity: 0;
		position: absolute;
		bottom: 8px;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		background: ${(props) => props.theme.colors.neutral0};
		border-radius: 8px;
		height: 2.5em;
		font-weight: 500;
	}
	.add-to-cart-button:hover {
		background: ${(props) => props.theme.colors.neutral200};
	}
	&:hover .add-to-cart-button {
		opacity: 1;
	}
`;
