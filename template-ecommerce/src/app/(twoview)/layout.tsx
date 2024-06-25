import TwoScreenLayout from '@/infrastructure/layouts/twoScreen';
import { Image } from '@mantine/core';

export default function TwoView({ children }: TwoViewProps) {
	return (
		<TwoScreenLayout>
			<Image
				src="https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg"
				alt="Background image"
				h="100%"
				fit="cover"
			/>
			{children}
		</TwoScreenLayout>
	);
}
interface TwoViewProps {
	children: React.ReactNode;
}
