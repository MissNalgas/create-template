import React from 'react';
export default function TwoScreenLayout({ children }: TwoScreenLayoutProps) {
	return (
		<div className="flex h-screen">
			<div className="flex-1">{children[0]}</div>
			<div className="w-[620px] overflow-auto">{children[1]}</div>
		</div>
	);
}

interface TwoScreenLayoutProps {
	children: [React.ReactNode, React.ReactNode];
}
