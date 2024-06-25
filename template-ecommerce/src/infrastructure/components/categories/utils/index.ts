export * from './useStringToggle';

import { ICategory } from '@/domain/models/product';

export function isChecked(category: ICategory, items: string[]): boolean {
	if (category.items.length) {
		return category.items.some((item) => isChecked(item, items));
	} else {
		return !items.includes(category.value);
	}
}
