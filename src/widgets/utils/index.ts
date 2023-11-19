import { SignalRow, activeRow, rows } from "../../core/signals/signals";

export const handleEnterPressed = (index: number) => {
	const activeRowIndex = rows.value.findIndex((row) => row.index === index);

	if (activeRowIndex !== -1) {
		const newRow: SignalRow = {
			name: "span",
			index: activeRowIndex + 1,
			active: true,
			value: {
				text: "",
			},
		};

		rows.value = [
			...rows.value.slice(0, activeRowIndex + 1),
			newRow,
			...rows.value.slice(activeRowIndex + 1),
		];

		for (let i = activeRowIndex + 2; i < rows.value.length; i++) {
			rows.value[i].index += 1;
		}
	}
};

export const handleBackspace = () => {
	const activeIndex = activeRow.value?.index;
	if (
		activeIndex &&
		activeIndex !== -1 &&
		rows.value.length !== 1 &&
		activeRow.value?.value.text.length === 0
	) {
		rows.value = [
			...rows.value.slice(0, activeIndex),
			...rows.value.slice(activeIndex + 1),
		];

		for (let i = activeIndex + 2; i < rows.value.length; i++) {
			rows.value[i].index -= 1;
		}

		const newActiveRowIndex = rows.value.find(
			(row) => row.index === activeIndex - 1
		);

		if (newActiveRowIndex) {
			newActiveRowIndex.active = true;
		}
	}
};
