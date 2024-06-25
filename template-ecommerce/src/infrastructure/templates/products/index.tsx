'use client';
import { useCategories, useProduct } from '@/infrastructure/hooks/api/product';
import ProductsPresentation from './presentation';
import Loading from '@/infrastructure/components/loading';

export default function ProductsTemplate() {
	const { data: products, isLoading } = useProduct();
	const { data: categories, isLoading: isLoadingCategories } =
		useCategories();

	if (isLoading || isLoadingCategories) return <Loading />;

	return (
		<ProductsPresentation products={products!} categories={categories!} />
	);
}
