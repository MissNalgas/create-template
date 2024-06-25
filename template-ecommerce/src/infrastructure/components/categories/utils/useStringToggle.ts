import { useReducer } from 'react';

export function useStringToggle() {
	return useReducer((state: string[], action: string) => {
		if (state.includes(action)) {
			return state.filter((item) => item !== action);
		} else {
			return [...state, action];
		}
	}, [] as string[]);
}
