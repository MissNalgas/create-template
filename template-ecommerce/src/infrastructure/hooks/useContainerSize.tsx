import { useLayoutEffect, useRef, useState } from 'react';

export interface IContainerSize {
	width: number;
	height: number;
}
export function useContainerSize<T extends HTMLElement>() {
	const [size, setSize] = useState<IContainerSize>({ width: 0, height: 0 });
	const containerRef = useRef<T | null>(null);

	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		function calculateSize() {
			if (!container) return;
			const { width, height } = container.getBoundingClientRect();

			setSize({
				width,
				height,
			});
		}

		calculateSize();
		window.addEventListener('resize', calculateSize);

		return () => window.removeEventListener('resize', calculateSize);
	}, []);

	return [size, containerRef] as const;
}
