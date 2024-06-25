'use client';
import { Button } from '@/infrastructure/components/button';
import { Text, Input } from '@/infrastructure/components/designSystem';
import { Checkbox, Input as InputM } from '@mantine/core';
import { IconBrandGmail } from '@tabler/icons-react';
import Link from 'next/link';

export default function SigninPresentation() {
	return (
		<div className="flex flex-col gap-medium justify-center h-full p-medium">
			<Text className="text-xl font-bold" as="h1">
				Te damos la bienvenida 👋
			</Text>
			<Text className="text-sm" color="neutral400">
				Inicia sesión aquí
			</Text>
			<form action="/" className="flex flex-col gap-medium">
				<InputM.Wrapper label="Correo">
					<Input placeholder="correo@example.com" />
				</InputM.Wrapper>
				<InputM.Wrapper label="Contraseña">
					<Input type="password" placeholder="Contraseña" />
				</InputM.Wrapper>
				<div className="flex justify-between">
					<Checkbox label="Recuérdame" />
					<Link href="/forgotpassword">
						<Text
							className="text-sm hover:underline cursor-pointer"
							color="neutral400"
						>
							Recuperar contraseña
						</Text>
					</Link>
				</div>
				<div className="flex flex-col gap-small">
					<Button>Iniciar sesión</Button>
					<Button
						color="gmail"
						hoverColor="gmail"
						className="flex items-center justify-center gap-small"
					>
						<IconBrandGmail color="white" />
						<Text color="neutral0">Ingresar con Gmail</Text>
					</Button>
				</div>
				<Text color="neutral400" className="text-center">
					¿No tienes cuenta?{' '}
					<Link href="/signup">
						<Text className="underline">Regístrate aquí</Text>
					</Link>
				</Text>
			</form>
		</div>
	);
}
