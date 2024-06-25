export const spacing = {
	extraSmall: 4,
	small: 8,
	normal: 12,
	medium: 16,
	large: 24,
	extraLarge: 32,
} as const;

export type Spacing = typeof spacing;
