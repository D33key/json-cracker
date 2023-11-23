import { Col, Row } from "antd";
import { useRef } from "react";
import { SignalRow, rows } from "../../core/signals/signals";
import { handleBackspace, handleEnterPressed } from "../../widgets/utils";
import {
	addRootKey,
	createObjectFromFormatedJSON,
	replacer,
	splitStringByNewLineWithWhitespace,
} from "../../core/utils";

const EditableRow = ({ row }: { row: SignalRow }) => {
	const ref = useRef<HTMLSpanElement | null>(null);

	const handleClick = () => {
		if (ref.current) {
			ref.current.setAttribute("contenteditable", "true");
			ref.current.focus();
		}
	};

	const handleBlur = () => {
		if (ref.current) {
			ref.current.removeAttribute("contenteditable");

			row.value.text = ref.current.textContent as string;
			row.active = false;
		}
	};

	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.code === "Enter") {
			event.preventDefault();
			handleBlur();
			handleEnterPressed(row.index);
		} else if (event.code === "Backspace") {
			handleBackspace();
		}
	};

	const handlePaste = (event: ClipboardEvent) => {
		event.preventDefault();
		if (event.clipboardData) {
			try {
				const currentIndex = row.index;
				const pastedTextAsJSON = addRootKey(
					event.clipboardData.getData("Text"),
					"glossary"
				);

				const formattedJSONString = JSON.stringify(
					pastedTextAsJSON,
					replacer,
					4
				);

				const arrayOfLines =
					splitStringByNewLineWithWhitespace(formattedJSONString);

				const newArrayOfPastedText = createObjectFromFormatedJSON(
					arrayOfLines,
					currentIndex
				);
				rows.value = [
					...rows.value.slice(0, currentIndex),
					...newArrayOfPastedText.slice(),
				];
			} catch (error) {
				console.error("Invalid JSON:", (error as Error).message);
			}
		}
	};

	const handleChangeText = (event: React.ChangeEvent<HTMLSpanElement>) => {
		if (event.currentTarget.textContent)
			row.value.text = event.currentTarget.textContent;
	};

	if (row.active) handleClick();

	return (
		<Row style={{ height: 20 }}>
			<Col
				style={{
					height: "100%",
					lineHeight: "1.2",
					display: "flex",
					color: "white",
				}}
				span={24}
			>
				<span style={{ display: "block", margin: "0 30px" }}>
					{row.index + 1}
				</span>
				<span
					ref={ref}
					onClick={handleClick}
					onKeyDown={handleKeyPress}
					onBlur={handleBlur}
					onInput={handleChangeText}
					onPaste={handlePaste}
					style={{
						display: "block",
						width: "100%",
						height: "100%",
					}}
				>
					{row.value.text}
				</span>
			</Col>
		</Row>
	);
};

export default EditableRow;
