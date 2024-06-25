import { Breadcrumbs as BreadcrumbsMantine } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

export default function Breadcrumbs(
	props: ElementProps<typeof BreadcrumbsMantine>,
) {
	return (
		<BreadcrumbsMantine
			separator={<IconChevronRight size={16} />}
			{...props}
		/>
	);
}
