import { Col, Row } from "antd";

const EditableRow = ({
	divValue,
}: {
	divValue: {
		text: string;
	};
}) => {
	return (
		<Row style={{ height: 20, margin: "0 25px" }}>
			<Col style={{ height: "100%", lineHeight: "1.2" }} span={24}>
				<span
					style={{
						color: "white",
						display: "block",
						width: "100%",
						height: "100%",
					}}
				>
					{divValue.text}
				</span>
			</Col>
		</Row>
	);
};

export default EditableRow;
