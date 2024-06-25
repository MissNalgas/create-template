import { Checkbox, Collapse, RangeSlider } from '@mantine/core';
import { Card, Text } from '../designSystem';
import CategorySection from './section';
import { useStringToggle, isChecked } from './utils';
import { ICategory } from '@/domain/models/product';
import { IconMinus, IconPlus } from '@tabler/icons-react';

const attributes = Array(8)
	.fill(null)
	.map((_, i) => `Attribute ${i}`);

function renderCategory(
	categories: ICategory[],
	openCategories: string[],
	toggleCategory: (item: string) => void,
) {
	return categories.map((category) => (
		<Card className="flex flex-col pl-small" key={category.value}>
			<Checkbox
				checked={isChecked(category, openCategories)}
				onChange={() => toggleCategory(category.value)}
				styles={{ labelWrapper: { width: '100%' } }}
				label={
					<Card className="flex">
						<Text className="flex-1">{category.name}</Text>
						{!!category.items.length &&
							(openCategories.includes(category.value) ? (
								<IconMinus size={14} />
							) : (
								<IconPlus size={14} />
							))}
					</Card>
				}
				size="xs"
			/>
			{!!category.items.length && (
				<Collapse in={openCategories.includes(category.value)}>
					<Card className="flex flex-col gap-small mt-small">
						{renderCategory(
							category.items,
							openCategories,
							toggleCategory,
						)}
					</Card>
				</Collapse>
			)}
		</Card>
	));
}

export default function Categories({
	categories,
}: {
	categories: ICategory[];
}) {
	const [openCategories, toggleCategory] = useStringToggle();

	return (
		<Card>
			<CategorySection title="Categorías">
				<Card className="flex flex-col gap-small my-small items-stretch px-2">
					{renderCategory(
						categories || [],
						openCategories,
						toggleCategory,
					)}
				</Card>
			</CategorySection>
			<CategorySection title="Precio">
				<Card className="py-small">
					<RangeSlider
						max={1000000}
						step={1000}
						defaultValue={[0, 1000000]}
						size={'xs'}
					/>
				</Card>
			</CategorySection>
			<CategorySection title="Atributos">
				<Card className="flex flex-col my-small gap-small px-2">
					{attributes.map((attribute) => (
						<Checkbox
							size="xs"
							styles={{ labelWrapper: { width: '100%' } }}
							label={attribute}
							key={attribute}
						/>
					))}
				</Card>
			</CategorySection>
		</Card>
	);
}
