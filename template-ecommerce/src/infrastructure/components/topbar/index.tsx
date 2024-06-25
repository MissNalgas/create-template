import { APP_NAME } from '@/infrastructure/const';
import { Button } from '../button';
import { Card, Text } from '../designSystem';
import { TopbarLink } from './styled';
import { IconShoppingCart } from '@tabler/icons-react';
import { CartComponent } from '@/infrastructure/providers/cartAnimation';
import { useScroll } from '@/infrastructure/hooks';
import { Avatar, Badge, Popover } from '@mantine/core';
import { useShoppingCart } from '@/infrastructure/store/shoppingCart';
import { useMemo, useState } from 'react';
import { spacing } from '@/infrastructure/theme';
import { ShoppingCart } from '../shoppingCart';
import Link from 'next/link';

const MENU_ITEMS = [
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'Productos',
		route: '/products',
	},
	{
		label: 'Sobre nosotros',
		route: '/about',
	},
	{
		label: 'Contáctanos',
		route: '/contact',
	},
] as const;
const SCROLL_GAP = 100;

export default function Topbar({ hideShoppingCart }: TopbarProps) {
	const { scrollY } = useScroll();
	const [isOpen, setIsOpen] = useState(false);
	const isAuthenticated = useMemo(() => Math.random() > 0.5, []);

	const cart = useShoppingCart((state) => state.products);

	const count = useMemo(
		() => cart.reduce((acc, item) => item.count + acc, 0),
		[cart],
	);

	return (
		<Card
			color="neutral0"
			className={`transition duration-500 flex gap-2 py-small sticky top-0 left-0 z-10 ${scrollY > SCROLL_GAP ? 'opacity-95 shadow' : 'opacity-100'}`}
		>
			<div className="max-w-screen-xl mx-auto flex justify-between w-[95vw] items-center">
				<Link href="/">
					<Text color="neutral1000" as="h1" className="text-xl">
						{APP_NAME}
					</Text>
				</Link>
				<ul className="justify-evenly flex-1 hidden md:flex">
					{MENU_ITEMS.map((item) => (
						<li key={item.route}>
							<TopbarLink href={item.route}>
								{item.label}
							</TopbarLink>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-4">
					{!hideShoppingCart && (
						<Popover
							trapFocus
							width={360}
							position="bottom"
							withArrow
							shadow="md"
							opened={isOpen}
							onChange={setIsOpen}
							radius={spacing.medium}
						>
							<CartComponent>
								<Popover.Target>
									<button
										className="mt-small relative"
										onClick={() => {
											setIsOpen((s) => !s);
										}}
									>
										<IconShoppingCart />
										{!!count && (
											<Badge
												className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
												color="primary"
												circle
											>
												{count}
											</Badge>
										)}
									</button>
								</Popover.Target>
							</CartComponent>
							<Popover.Dropdown>
								<ShoppingCart cart={cart} />
							</Popover.Dropdown>
						</Popover>
					)}
					{isAuthenticated ? (
						<Link href="/profile">
							<Avatar />
						</Link>
					) : (
						<Link href="/signin">
							<Button className="min-w-40">Iniciar sesión</Button>
						</Link>
					)}
				</div>
			</div>
		</Card>
	);
}
interface TopbarProps {
	hideShoppingCart?: boolean;
}
