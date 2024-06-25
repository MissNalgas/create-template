'use client';
import { useProductDetail } from '@/infrastructure/hooks/api/product';
import ProductPresentation from './presentation';
import { useParams } from 'next/navigation';
import Loading from '@/infrastructure/components/loading';
import { Text } from '@/infrastructure/components/designSystem';

export default function ProductTemplate() {
	const param = useParams<{ category: string; productId: string }>();

	const { data, isLoading, isError } = useProductDetail(param.productId);

	if (isLoading) return <Loading />;
	if (isError) return <Text>Some error</Text>;

	return <ProductPresentation product={data!} />;
}
