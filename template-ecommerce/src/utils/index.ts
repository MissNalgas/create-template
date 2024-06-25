export function hash() {
	const CHARS =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSTUVWXYZ0123456789';
	return Array(9 + Math.floor(Math.random() * 4))
		.fill(null)
		.map(() => Math.floor(Math.random() * CHARS.length))
		.map((key) => CHARS.charAt(key))
		.join('');
}

export function randomInt(i: number) {
	return Math.floor(Math.random() * i);
}
