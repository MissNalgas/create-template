declare type ElementProps<T> =
	T extends React.ComponentType<infer Props>
		? Props extends Object
			? Props
			: never
		: never;
