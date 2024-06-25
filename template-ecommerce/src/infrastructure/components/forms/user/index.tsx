import { Avatar, FileButton } from '@mantine/core';
import { Button } from '../../button';
import { IconPencil } from '@tabler/icons-react';
import { Input, Text } from '../../designSystem';
import { FormEvent, useMemo, useState } from 'react';

export default function UserForm() {
	const [file, setFile] = useState<File>();

	const avatarUrl = useMemo(() => {
		return file && URL.createObjectURL(file);
	}, [file]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert('onsubmit');
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="grid grid-cols-1 md:grid-cols-2 gap-normal"
		>
			<div className="flex items-center justify-between md:col-span-2">
				<FileButton
					onChange={(file) => file && setFile(file)}
					accept="image/*"
				>
					{(props) => (
						<button
							{...props}
							type="button"
							className="relative place-self-start"
						>
							<Avatar size="xl" src={avatarUrl && avatarUrl} />
							<IconPencil className="absolute bottom-0 right-0 bg-gray-900 rounded-full p-1 text-white" />
						</button>
					)}
				</FileButton>
				<Button className="flex items-center gap-small place-self-end self-center">
					<IconPencil />
					<Text color="neutral0">Editar perfil</Text>
				</Button>
			</div>
			<Input label="Nombres" placeholder="John" />
			<Input label="Apellidos" placeholder="Doe" />
			<Input
				label="Número de teléfono"
				placeholder="+57 321 123 4567"
				type="tel"
			/>
			<Input
				label="Correo"
				placeholder="correo@example.com"
				type="email"
			/>
			<Input
				className="grid-cols-2"
				label="Dirección"
				placeholder="Calle 123 # 23 - 45"
			/>
		</form>
	);
}
