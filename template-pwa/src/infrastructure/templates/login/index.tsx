'use client';

import Button from '@/infrastructure/components/button';
import { useAuth } from '@/infrastructure/providers/auth';
import { useForm } from 'react-hook-form';

interface ILoginForm {
	username: string;
}

export default function LoginTemplate() {
	const { register, handleSubmit } = useForm<ILoginForm>({
		defaultValues: {
			username: '',
		},
	});
	const { logIn } = useAuth();

	const onSubmit = (data: ILoginForm) => {
		logIn(data.username);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex items-center justify-center min-h-screen gap-2"
		>
			<input
				placeholder="Username"
				className="border rounded h-extraLarge px-2"
				{...register('username')}
			/>
			<Button>Login</Button>
		</form>
	);
}
