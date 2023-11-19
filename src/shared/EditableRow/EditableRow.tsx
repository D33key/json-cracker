import { Col, Row } from "antd";
import { useRef } from "react";
import { SignalRow } from "../../core/signals/signals";
import { handleBackspace, handleEnterPressed } from "../../widgets/utils";

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
			// handleBlur();
			handleBackspace(row.index);
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
