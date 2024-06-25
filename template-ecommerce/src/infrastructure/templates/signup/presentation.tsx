'use client';
import { Button } from '@/infrastructure/components/button';
import { Input, Text } from '@/infrastructure/components/designSystem';
import { Checkbox, Input as InputM } from '@mantine/core';
import Link from 'next/link';

export default function SignupPresentation() {
	return (
		<div className="flex flex-col h-full p-large justify-center gap-medium">
			<Text className="text-xl font-bold" as="h1">
				Crear cuenta nueva
			</Text>
			<form action="/" className="flex flex-col gap-medium">
				<InputM.Wrapper label="Nombres">
					<Input placeholder="John" />
				</InputM.Wrapper>
				<InputM.Wrapper label="Apellidos">
					<Input placeholder="Doe" />
				</InputM.Wrapper>
				<InputM.Wrapper label="Correo">
					<Input placeholder="correo@example.com" />
				</InputM.Wrapper>
				<InputM.Wrapper label="Contraseña">
					<Input placeholder="Contraseña" />
				</InputM.Wrapper>
				<Checkbox
					id="termAndConditionsCheckbox"
					label={
						<Text>
							Acepto los{' '}
							<Link href="/termsandconditions">
								<Text className="underline">
									términos y condiciones
								</Text>
							</Link>
						</Text>
					}
				/>
				<Button>Ingresar</Button>
			</form>
		</div>
	);
}
