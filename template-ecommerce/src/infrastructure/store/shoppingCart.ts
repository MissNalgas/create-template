import { IProduct } from '@/domain/models/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import { useCallback, useMemo } from 'react';

export interface IShoppingCartProduct {
	product: IProduct;
	count: number;
}

interface IShoppingCart {
	products: IShoppingCartProduct[];
	addProduct: (newProduct: IProduct, count?: number) => void;
	removeProduct: (productId: IProduct['id'], count?: number) => void;
}

export const useShoppingCart = create(
	persist<IShoppingCart>(
		(set) => ({
			products: [],
			addProduct: (newProduct, count = 1) =>
				set((state: IShoppingCart) => {
					const productIndex = state.products.findIndex(
						(item) => item.product.id === newProduct.id,
					);

					if (productIndex >= 0) {
						return produce((state: IShoppingCart) => {
							state.products[productIndex].count += count;
						})(state);
					} else {
						return produce((state: IShoppingCart) => {
							state.products.push({
								product: newProduct,
								count: count,
							});
						})(state);
					}
				}),
			removeProduct: (productId: IProduct['id'], rmCount = 1) =>
				set((state) => {
					const productIndex = state.products.findIndex(
						(item) => item.product.id === productId,
					);
					if (productIndex === -1) return state;

					const count = state.products[productIndex].count;

					return produce((state: IShoppingCart) => {
						if (count > rmCount) {
							--state.products[productIndex].count;
						} else {
							state.products = state.products.filter(
								(item) => item.product.id !== productId,
							);
						}
					})(state);
				}),
		}),
		{ name: 'shopping-cart' },
	),
);

// Utilities

export function useShoppingCartTotal(): number {
	const products = useShoppingCart((state) => state.products);
	return useMemo(
		() =>
			products.reduce(
				(acc, product) =>
					product.count * Number(product.product.price) + acc,
				0,
			),
		[products],
	);
}

export function useShoppingCartHasItem() {
	const items = useShoppingCart((state) => state.products);
	return useCallback(
		(itemId: IProduct['id']) => {
			return items.some((item) => item.product.id === itemId);
		},
		[items],
	);
}
