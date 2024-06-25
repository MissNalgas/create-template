import '@emotion/react';
import type { ThemeColors } from './colors';
import { Spacing } from '../spacing';

declare module '@emotion/react' {
	export interface Theme {
		colors: ThemeColors;
		spacing: Spacing;
	}
}
