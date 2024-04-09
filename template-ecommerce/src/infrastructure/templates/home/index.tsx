'use client';
import { useProduct } from '@/infrastructure/hooks/api/product';
import HomePresentation from './presentation';
import Loading from '@/infrastructure/components/loading';

export default function HomeTemplate() {
	const { data, isError, isLoading } = useProduct();

	if (isLoading) return <Loading />;
	if (isError || !data) return <p>Error</p>;

	return <HomePresentation products={data} />;
}
