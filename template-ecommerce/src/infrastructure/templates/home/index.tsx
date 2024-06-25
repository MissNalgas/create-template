'use client';
import { Text } from '@/infrastructure/components/designSystem';
import { useProduct, useQueryBanner } from '@/infrastructure/hooks/api/product';
import HomePresentation from './presentation';
import Loading from '@/infrastructure/components/loading';

export default function HomeTemplate() {
	const { data, isError, isLoading } = useProduct();
	const {
		data: bannerData,
		isLoading: bannerLoading,
		isError: bannerError,
	} = useQueryBanner();

	if (isLoading || bannerLoading) return <Loading />;
	if (isError || !data || bannerError) return <Text as="p">Error</Text>;

	return <HomePresentation products={data} banners={bannerData!} />;
}
