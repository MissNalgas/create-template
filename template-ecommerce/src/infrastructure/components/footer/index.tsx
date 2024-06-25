import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandMastercard,
	IconBrandPaypal,
	IconBrandVisa,
	IconBrandWhatsapp,
	IconCreditCardPay,
	IconMail,
} from '@tabler/icons-react';
import { Card, Text } from '../designSystem';
import { APP_NAME } from '@/infrastructure/const';
import { useTheme } from '@emotion/react';

const AI = {
	Categorias: ['categoria 1', 'categoria 2'],
	Productos: ['producto 1', 'producto 2'],
};

export default function Footer() {
	const { colors } = useTheme();

	return (
		<Card as="footer" color="neutral1000">
			<div className="w-full max-w-screen-xl mx-auto gap-4 flex flex-col px-8 py-4 pt-16">
				<div className="flex justify-between sm:flex-row flex-col gap-medium">
					<div className="flex flex-col gap-4 items-center sm:items-start">
						<Text as="h1" color="neutral0" className="text-xl">
							{APP_NAME}
						</Text>
						<Text as="h2" color="neutral0">
							Información de contacto
						</Text>
						<div className="flex gap-4">
							<IconBrandWhatsapp color={colors.neutral0} />
							<Text color="neutral400">321 1234567</Text>
						</div>
						<div className="flex gap-4">
							<IconMail color={colors.neutral0} />
							<Text color="neutral400">correo@example.com</Text>
						</div>
					</div>
					<div className="flex justify-evenly flex-1 flex-col sm:flex-row items-center sm:items-start">
						{Object.entries(AI).map(([page, subPages]) => (
							<div key={page}>
								<Text
									color="neutral0"
									className="font-semibold"
								>
									{page}
								</Text>
								<ul>
									{subPages.map((page) => (
										<li key={page}>
											<Text color="neutral400">
												{page}
											</Text>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-2">
						<Text as="h2" color="neutral0" className="text-md">
							Subscríbete a nuestro boletín
						</Text>
						<input
							placeholder="correo@example.com"
							className="p-2 rounded"
						/>
					</div>
				</div>
				<hr />
				<div className="flex items-center justify-between flex-col sm:flex-row gap-medium">
					<div className="flex gap-4 items-center">
						<IconBrandVisa color={colors.neutral0} />
						<IconBrandMastercard color={colors.neutral0} />
						<IconBrandPaypal color={colors.neutral0} />
						<IconCreditCardPay color={colors.neutral0} />
					</div>
					<Text color="neutral400" className="text-center">
						© Copyright {new Date().getFullYear()} - {APP_NAME}
					</Text>
					<div className="flex items-center gap-4">
						<IconBrandInstagram color={colors.neutral0} />
						<IconBrandWhatsapp color={colors.neutral0} />
						<IconBrandFacebook color={colors.neutral0} />
					</div>
				</div>
			</div>
		</Card>
	);
}
