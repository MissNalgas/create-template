import { APP_NAME } from '@/infrastructure/const';

export default function Topbar() {
	return (
		<div className="flex gap-2 bg-primary600 py-medium">
			<div className="max-w-screen-lg mx-auto">
				<h1 className="text-neutral0 text-xl">{APP_NAME}</h1>
			</div>
		</div>
	);
}
