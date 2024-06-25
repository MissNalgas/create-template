import { Card, Text } from '@/infrastructure/components/designSystem';
import Footer from '@/infrastructure/components/footer';
import Topbar from '@/infrastructure/components/topbar';
import { APP_NAME } from '@/infrastructure/const';

export default function ContactPresentation() {
	return (
		<Card>
			<Topbar />
			<Card className="flex flex-col items-center min-h-[600px] justify-center">
				<Text className="text-2xl font-bold my-large" as="h1">
					{APP_NAME}
				</Text>
				<Text>
					<b>Teléfono: </b>{' '}
					<a className="underline" href="tel:+573211234567">
						+57 321 123 4567
					</a>
				</Text>
				<Text>
					<b>Correo: </b>{' '}
					<a className="underline" href="mailto:contact@example.com">
						contact@example.com
					</a>
				</Text>
			</Card>
			<Footer />
		</Card>
	);
}
