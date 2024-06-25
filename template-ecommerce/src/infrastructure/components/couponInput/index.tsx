import { Input } from '@mantine/core';
import { Card, Text } from '../designSystem';
import { SubmitButton } from './styled';

export default function CouponInput({
	label,
	submitText,
	placeholder,
}: CouponInputProps) {
	return (
		<Card>
			<label className="text-sm" htmlFor="">
				<Text>{label}</Text>
			</label>
			<Card className="flex rounded-lg border overflow-hidden items-center">
				<Input
					className="flex-1 px-small"
					variant="unstyled"
					placeholder={placeholder}
				/>
				<SubmitButton>
					<Text color="neutral100" className="font-semibold">
						{submitText}{' '}
					</Text>
				</SubmitButton>
			</Card>
		</Card>
	);
}
interface CouponInputProps {
	label: string;
	submitText: string;
	placeholder?: string;
}
