import { FormEvent } from 'react';
import { Button } from '../../button';
import { Input } from '../../designSystem';

export default function AddressForm({ onSubmit }: AddressFormProps) {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit?.();
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-small">
			<Input placeholder="Apartamento centro" label="Nombre" />
			<Input placeholder="321 123 4567" label="Número de teléfono" />
			<Input label="País" />
			<Input label="Ciudad" />
			<Input placeholder="Calle 123 # 45 - 56" label="Dirección" />
			<Button>Añadir</Button>
		</form>
	);
}
interface AddressFormProps {
	onSubmit?: () => void;
}
