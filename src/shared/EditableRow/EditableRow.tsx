import { Col, Row } from "antd";
import { useRef } from "react";
import { SignalRow } from "../../core/signals/signals";

const EditableRow = ({
	row,
	onEnterPressed,
}: {
	row: SignalRow;
	onEnterPressed: (index: number) => void;
}) => {
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
			onEnterPressed(row.index);
		}
	};

	if (row.active) handleClick();

	return (
		<Row style={{ height: 20, margin: "0 25px" }}>
			<Col style={{ height: "100%", lineHeight: "1.2" }} span={24}>
				<span
					ref={ref}
					onClick={handleClick}
					onKeyDown={handleKeyPress}
					onBlur={handleBlur}
					style={{
						color: "white",
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
