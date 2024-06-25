import { Image } from '@mantine/core';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Carousel from '../carousel';

export default function PhotoViewer({ images, alt }: PhotoViewerProps) {
	const [mainImage, ...otherImages] = images;
	console.log('rednder');

	return (
		<PhotoProvider>
			<div className="flex flex-col gap-small">
				<PhotoView src={mainImage}>
					<Image
						className="h-96 sm:w-full object-contain"
						src={mainImage}
						alt={alt}
					/>
				</PhotoView>
				<div className="h-[100px]">
					<Carousel
						pagination
						navigation
						items={otherImages}
						slidesPerView={3}
						renderItem={(item) => (
							<div className="grid place-content-center">
								<PhotoView src={item}>
									<Image
										className="w-[100px] h-[100px]"
										src={item}
										alt={item}
									/>
								</PhotoView>
							</div>
						)}
						getKey={(_, index) => index}
					/>
				</div>
			</div>
		</PhotoProvider>
	);
}
interface PhotoViewerProps {
	images: string[];
	alt: string;
}
