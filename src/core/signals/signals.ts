import { signal } from "@preact/signals-react";

export interface SignalRow {
	name: "span";
	index: number;
	active: boolean;
	value: {
		text: string;
	};
}

export const rows = signal([
	{
		name: "span",
		index: 0,
		active: true,
		value: {
			text: "First",
		},
	},
] as SignalRow[]);
