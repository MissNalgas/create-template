import AddressList from '@/infrastructure/components/addressList';
import { Card, Text } from '@/infrastructure/components/designSystem';
import Footer from '@/infrastructure/components/footer';
import AddressForm from '@/infrastructure/components/forms/address';
import UserForm from '@/infrastructure/components/forms/user';
import OrderItems from '@/infrastructure/components/orderItems';
import ProfileSidebar from '@/infrastructure/components/profileSidebar';
import Topbar from '@/infrastructure/components/topbar';
import { Modal } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { IconBox, IconTag, IconUser } from '@tabler/icons-react';
import { useState } from 'react';

enum Tabs {
	PERSONAL_INFO = 'personalInfo',
	ORDERS = 'orders',
	ADDRESSES = 'addresses',
}

const BUTTONS = [
	{
		id: Tabs.PERSONAL_INFO,
		label: 'Información personal',
		icon: <IconUser />,
	},
	{
		id: Tabs.ORDERS,
		label: 'Mis órdenes',
		icon: <IconBox />,
	},
	{
		id: Tabs.ADDRESSES,
		label: 'Mis direcciones',
		icon: <IconTag />,
	},
] as const;

export default function ProfilePresentation() {
	const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.PERSONAL_INFO);
	const [showAddressModal, toggleShowAddressModal] = useToggle();

	return (
		<Card>
			<Topbar />
			<Card className="mx-auto my-extraLarge w-full max-w-screen-xl flex flex-col gap-large px-medium">
				<Card>
					<Text as="h1" className="text-2xl">
						Resumen
					</Text>
				</Card>
				<Card className="flex flex-col md:flex-row">
					<ProfileSidebar
						selectedItem={selectedTab}
						onChange={setSelectedTab}
						items={BUTTONS}
					/>
					<Card className="flex-1 p-large">
						{selectedTab === Tabs.PERSONAL_INFO && <UserForm />}
						{selectedTab === Tabs.ORDERS && <OrderItems />}
						{selectedTab === Tabs.ADDRESSES && (
							<AddressList
								onAddAddress={() => toggleShowAddressModal()}
							/>
						)}
					</Card>
				</Card>
			</Card>
			<Footer />
			<Modal
				title={
					<Text className="text-xl font-semibold">
						Nueva dirección
					</Text>
				}
				opened={showAddressModal}
				onClose={toggleShowAddressModal}
			>
				<AddressForm onSubmit={toggleShowAddressModal} />
			</Modal>
		</Card>
	);
}
