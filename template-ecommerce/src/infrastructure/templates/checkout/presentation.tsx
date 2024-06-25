import CheckoutItems from '@/infrastructure/components/checkoutItems';
import { Card, Text } from '@/infrastructure/components/designSystem';
import Footer from '@/infrastructure/components/footer';
import SubtotalCard from '@/infrastructure/components/subtotalCard';
import Topbar from '@/infrastructure/components/topbar';

export default function CheckoutPresentation() {
	return (
		<Card>
			<Topbar hideShoppingCart />
			<Card className="w-full max-w-screen-xl mx-auto">
				<Text as="h1" className="text-2xl font-semibold">
					Resumen
				</Text>
				<Card className="flex gap-medium my-medium flex-col md:flex-row mx-medium">
					<Card className="basis-[300px] md:order-2">
						<SubtotalCard />
					</Card>
					<Card className="flex-1 mx-medium">
						<CheckoutItems />
					</Card>
				</Card>
			</Card>
			<Footer />
		</Card>
	);
}
