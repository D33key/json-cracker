import { useState } from "react";

import { Col, Row } from "antd";

const EditableRow = ({
	divValue,
}: {
	divValue: {
		text: string;
	};
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newContent, setNewContent] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewContent(e.target.value);
	};

	return (
		<Row style={{ height: 20, margin: "0 25px" }}>
			<Col style={{ height: "100%", lineHeight: "1.2", }} span={24}>
				{isEditing ? (
					<textarea
                        autoFocus
						value={newContent}
						onChange={handleChange}
						onBlur={(event) => {
                            divValue.text = event.target.value;
                            setIsEditing(false)
                        }}
					/>
				) : (
					<span
						style={{
							color: "white",
							display: "block",
							width: "100%",
							height: "100%",
						}}
						onClick={() => setIsEditing(true)}
					>
						{divValue.text}
					</span>
				)}
			</Col>
		</Row>
	);
};

export default EditableRow;
