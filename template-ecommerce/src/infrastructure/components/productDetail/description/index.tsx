import { Tabs } from '@mantine/core';
import { Card, Text } from '../../designSystem';

export default function ProductDescription() {
	return (
		<Card>
			<Tabs defaultValue="description">
				<Tabs.List>
					<Tabs.Tab value="description">
						<Text>Descripción</Text>
					</Tabs.Tab>
					<Tabs.Tab value="additionalInformation">
						<Text>Información adicional</Text>
					</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel value="description">
					<Text>description</Text>
				</Tabs.Panel>
				<Tabs.Panel value="additionalInformation">
					<Text>Info adicional</Text>
				</Tabs.Panel>
			</Tabs>
		</Card>
	);
}
