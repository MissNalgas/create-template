import { productService } from '@/application/services/product';
import { useQuery } from 'react-query';

export function useProduct() {
	const data = useQuery({
		queryKey: ['product'],
		queryFn: productService.getAll,
	});
	return data;
}
