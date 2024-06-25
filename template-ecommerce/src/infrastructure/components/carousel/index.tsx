import React, { Key, forwardRef, useEffect, useState } from 'react';
import { SwiperSlide, Swiper, SwiperRef } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css';
import { SwiperModule } from 'swiper/types';
export * from './image';

function CarouselComp<T>(
	{
		items,
		renderItem,
		getKey,
		slidesPerView,
		pagination = false,
		navigation = false,
	}: CarouselProps<T>,
	ref: React.ForwardedRef<SwiperRef>,
) {
	const [modules, setModules] = useState<SwiperModule[]>([]);

	useEffect(() => {
		if (pagination || navigation) {
			import('swiper/modules').then(({ Pagination, Navigation }) => {
				const mods: SwiperModule[] = [];

				if (pagination) mods.push(Pagination);
				if (navigation) mods.push(Navigation);

				setModules(mods);
			});
		}
	}, [pagination, navigation]);

	return (
		<Swiper
			key={modules.length}
			modules={[...modules, Mousewheel]}
			ref={ref}
			slidesPerView={slidesPerView}
			style={{ width: '100%' }}
			pagination={pagination}
			mousewheel={{
				enabled: true,
				forceToAxis: true,
			}}
			navigation={navigation}
		>
			{items.map((item, i) => (
				<SwiperSlide key={getKey(item, i)}>
					{renderItem(item, i)}
				</SwiperSlide>
			))}
		</Swiper>
	);
}

const Carousel = forwardRef(CarouselComp) as <T>(
	props: CarouselProps<T> & { ref?: React.ForwardedRef<SwiperRef> },
) => ReturnType<typeof CarouselComp>;
export default Carousel;

interface CarouselProps<T> {
	items: ReadonlyArray<T>;
	renderItem: (item: T, index: number) => React.ReactNode;
	getKey: (item: T, index: number) => Key;
	slidesPerView?: number;
	pagination?: boolean;
	navigation?: boolean;
}
