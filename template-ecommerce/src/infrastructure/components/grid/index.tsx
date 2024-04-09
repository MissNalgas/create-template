import { IProduct } from '@/domain/models/product';

export default function Grid({ products }: GridProps) {
	return (
		<div className="grid gap-small mx-auto max-w-screen-lg grid-cols-3 flex-1 w-full">
			{products.map((_, i) => (
				<div key={i} className="bg-neutral100 h-60 rounded shadow" />
			))}
		</div>
	);
}
interface GridProps {
	products: IProduct[];
}
