import { SignalRow } from "../signals/signals";

export function replacer(key: string, value: string): string {
	return typeof value === "string" ? value : JSON.stringify(value, null, 4);
}

export function addRootKey(jsonString: string, rootKey: string): string {
	try {
		const jsonObject = JSON.parse(jsonString);

		if (
			jsonObject &&
			Object.prototype.hasOwnProperty.call(jsonObject, rootKey)
		) {
			return jsonString;
		}
		const newObject = { [rootKey]: jsonObject };
		return JSON.stringify(newObject, null, 4);
	} catch (error) {
		console.error("Invalid JSON:", (error as Error).message);
		return jsonString;
	}
}

export function splitStringByNewLineWithWhitespace(
	jsonString: string
): string[] {
	const lines: string[] = jsonString.split(/\\r\\n/);

	return lines;
}

export function createObjectFromFormatedJSON(
	jsonString: string[],
	lastIndex: number
) {
	const createdObject = jsonString.reduce<SignalRow[]>(
		(array, currentString, index) => {
			const createdObj: SignalRow = {
				name: "span",
				index: lastIndex + index + 1,
				active: false,
				value: {
					text: currentString,
				},
			};
			array.push(createdObj);
			return array;
		},
		[]
	);

	return createdObject;
}
