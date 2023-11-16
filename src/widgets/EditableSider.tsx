import { Layout } from "antd";
import EditableRow from "../shared/EditableRow/EditableRow";
import { divs } from "../core/signals";

const { Sider } = Layout;

const siderStyles: React.CSSProperties = {
	position: "relative",
	backgroundColor: "#1e1e1e",
	borderRight: "1px solid rgba(204, 204, 204, 0.2)",
	textAlign: "left",
	lineHeight: 120,
};

const EditableSider = () => {
	// const handleDivClick = (index: number) => {
	//     const editableDiv = divs.value.filter(div => div.index === index);
	// 	console.log(editableDiv);
	// };
	// const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
	// 	const target = event.target as HTMLDivElement;
	// 	const dataIndex = target.getAttribute("data-index");

	// 	if (dataIndex !== null) {
	// 		const index = parseInt(dataIndex, 10);
	// 		handleDivClick(index);
	// 	}
	// };
    console.log(divs.value)
	return (
		<Sider width={400} style={siderStyles}>
			{divs.value.map((div, index) => {
				return (
					<EditableRow key={`${div.name}-${index}`} divValue={div.value} />
				);
			})}
		</Sider>
	);
};

export default EditableSider;
