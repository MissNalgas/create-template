import { useEffect, useState } from 'react';

export function useScroll() {
	const [scroll, setScroll] = useState({ scrollX: 0, scrollY: 0 });

	useEffect(() => {
		function getScroll() {
			setScroll({
				scrollX: window.scrollX,
				scrollY: window.scrollY,
			});
		}

		getScroll();
		window.addEventListener('scroll', getScroll);

		return () => window.removeEventListener('scroll', getScroll);
	}, []);

	return scroll;
}
