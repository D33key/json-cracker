import { Layout } from "antd";
import EditableRow from "../shared/EditableRow/EditableRow";
import { divs } from "../core/signals/signals";

const { Sider } = Layout;

const siderStyles: React.CSSProperties = {
	position: "relative",
	backgroundColor: "#1e1e1e",
	borderRight: "1px solid rgba(204, 204, 204, 0.2)",
	textAlign: "left",
	lineHeight: 120,
};

const EditableSider = () => {

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
