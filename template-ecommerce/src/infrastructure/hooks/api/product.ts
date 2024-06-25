import { productService } from '@/application/services/product';
import { useQuery } from 'react-query';

export function useProduct() {
	const data = useQuery({
		queryKey: ['product'],
		queryFn: productService.getAll,
	});
	return data;
}

export function useProductDetail(id: string) {
	return useQuery({
		queryKey: ['productDetail', id],
		queryFn: async () => await productService.getProductDetail(id),
	});
}

export function useQueryBanner() {
	return useQuery({
		queryKey: ['banner'],
		queryFn: productService.getBanner,
	});
}

export function useCategories() {
	return useQuery({
		queryKey: ['categories'],
		queryFn: productService.getCategories,
	});
}
