import {
	motion,
	useMotionValue,
	animate as framerAnimate,
	MotionValue,
} from 'framer-motion';
import {
	MutableRefObject,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';

interface IMotionValues {
	x?: MotionValue<number>;
	y?: MotionValue<number>;
	width?: MotionValue<number>;
	height?: MotionValue<number>;
	opacity?: MotionValue<number>;
}

interface ICartAnimationContext {
	cartElementRef?: MutableRefObject<HTMLDivElement | null>;
	itemElementsRef?: MutableRefObject<Record<string, HTMLDivElement>>;
	animate: (key: string) => void;
	motionValues: IMotionValues;
	animatedKey: string;
}

const ANIMATION_DURATION = 0.4;

export const CartAnimationContext = createContext<ICartAnimationContext>({
	animate() {
		throw new Error('[cartAnimation] Provider is missing');
	},
	motionValues: {},
	animatedKey: '',
});
export function useCartAnimation() {
	return useContext(CartAnimationContext);
}
export function CartAnimationProvider({
	children,
}: CartAnimationProviderProps) {
	const cartElementRef = useRef<HTMLDivElement>(null);
	const itemElementsRef = useRef<Record<string, HTMLDivElement>>({});
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const width = useMotionValue(0);
	const height = useMotionValue(0);
	const opacity = useMotionValue(0);
	const [animatedKey, setAnimatedKey] = useState('');

	const motionValues = useMemo(
		() => ({ x, y, width, height, opacity }),
		[x, y, width, height, opacity],
	);

	const animate = useCallback(
		(key: string) => {
			const cartElement = cartElementRef.current;
			if (!cartElement)
				return console.warn('[CartAnimation] cartElement not found');
			const cart = cartElement.getBoundingClientRect();
			const itemElement = itemElementsRef.current[
				key as keyof typeof itemElementsRef.current
			] as HTMLElement;
			if (!itemElement)
				return console.warn('[CartAnimation] itemElement not found');
			const item = itemElement.getBoundingClientRect();

			x.set(item.left + window.scrollX);
			y.set(item.top + window.scrollY);
			width.set(1);
			height.set(1);
			opacity.set(1);

			const scaleXDiff = (item.width - cart.width) / 2;
			const scaleYDiff = (item.height - cart.height) / 2;

			const promises = [
				framerAnimate(x, cart.x - scaleXDiff, {
					duration: ANIMATION_DURATION,
					ease: 'easeOut',
				}),
				framerAnimate(y, cart.y + window.scrollY - scaleYDiff, {
					duration: ANIMATION_DURATION,
					ease: 'easeOut',
				}),
				framerAnimate(width, cart.width / item.width, {
					duration: ANIMATION_DURATION,
					ease: 'easeOut',
				}),
				framerAnimate(height, cart.height / item.height, {
					duration: ANIMATION_DURATION,
					ease: 'easeOut',
				}),
				framerAnimate(opacity, 0.2, {
					duration: ANIMATION_DURATION,
					ease: 'easeOut',
				}),
			];

			setAnimatedKey(key);
			Promise.allSettled(promises).then(() => {
				setAnimatedKey('');
			});
		},
		[width, height, x, y, opacity],
	);

	const contextValue = useMemo(
		() => ({
			cartElementRef,
			itemElementsRef,
			animate,
			motionValues,
			animatedKey,
		}),
		[animate, motionValues, animatedKey],
	);

	return (
		<CartAnimationContext.Provider value={contextValue}>
			{children}
		</CartAnimationContext.Provider>
	);
}
interface CartAnimationProviderProps {
	children?: React.ReactNode;
}

export function CartComponent({ children }: CartComponentProps) {
	const { cartElementRef } = useCartAnimation();

	return <div ref={cartElementRef}>{children}</div>;
}
interface CartComponentProps {
	children?: React.ReactNode;
}
export function ItemCartComponent({
	children,
	customKey,
}: ItemCartComponentProps) {
	const { itemElementsRef, motionValues, animatedKey } = useCartAnimation();
	const containerRef = useRef<HTMLDivElement>(null);
	const [originalSize, setOriginalSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const container = containerRef.current;
		if (!container || !itemElementsRef) return;

		itemElementsRef.current[customKey] = container;

		const rect = container.getBoundingClientRect();
		setOriginalSize({
			width: rect.width,
			height: rect.height,
		});
	}, [itemElementsRef, customKey]);

	return (
		<>
			<div ref={containerRef}>{children}</div>
			{customKey === animatedKey &&
				createPortal(
					<motion.div
						style={{
							position: 'absolute',
							scaleX: motionValues.width,
							scaleY: motionValues.height,
							left: motionValues.x,
							top: motionValues.y,
							opacity: motionValues.opacity,
							zIndex: 10,
							width: originalSize.width || undefined,
							height: originalSize.height || undefined,
						}}
					>
						{children}
					</motion.div>,
					document.body,
				)}
		</>
	);
}
interface ItemCartComponentProps {
	children?: React.ReactNode;
	customKey: string;
}
