import { signal } from "@preact/signals-react";

interface SignalDiv {
	name: "div";
    index: number;
	value: {
		text: string;
	};
}

export const divs = signal([{
    name: 'div',
    index: 0,
    value: {
        text: 'First'
    }
}] as SignalDiv[]);
