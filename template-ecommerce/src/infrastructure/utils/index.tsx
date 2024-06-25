import React from 'react';

interface PropsWithClassName {
	className?: string;
}
export function withClassname(cName: string) {
	return function <
		P extends PropsWithClassName,
		C extends React.ComponentType<P>,
	>(Component: C): C {
		const componentFunction = function ({ className = '', ...props }: P) {
			const typedProps: any = props;
			return (
				<Component
					{...typedProps}
					className={className + ' ' + cName}
				/>
			);
		};
		componentFunction.displayName = Component.displayName;
		return componentFunction as C;
	};
}
