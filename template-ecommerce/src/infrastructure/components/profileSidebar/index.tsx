import { Avatar, Divider } from '@mantine/core';
import { Card, Text } from '../designSystem';
import { ItemButton } from './styled';

export default function ProfileSidebar<T extends string>({
	items,
	onChange,
	selectedItem,
}: ProfileSidebarProps<T>) {
	return (
		<Card className="md:w-60 w-full box-border rounded-2xl border drop-shadow-sm overflow-hidden h-max">
			<Card className="flex items-center gap-medium p-medium">
				<Avatar />
				<Card className="flex flex-col justify-between">
					<Text color="neutral400">Hola 👋</Text>
					<Text className="text-lg font-semibold">Jose Perez</Text>
				</Card>
			</Card>
			<Divider />
			<ul className="py-large flex flex-col">
				{items.map((button) => (
					<li key={button.label}>
						<ItemButton
							onClick={() => onChange(button.id)}
							isActive={selectedItem === button.id}
						>
							{button.icon}
							<Text
								color={
									selectedItem === button.id
										? 'neutral0'
										: 'neutral900'
								}
							>
								{button.label}
							</Text>
						</ItemButton>
					</li>
				))}
			</ul>
		</Card>
	);
}
interface ProfileSidebarProps<T extends string> {
	items: ReadonlyArray<SidebarItem<T>>;
	onChange: (_newItem: T) => void;
	selectedItem: T;
}
interface SidebarItem<T extends string> {
	id: T;
	label: string;
	icon: React.ReactNode;
}
