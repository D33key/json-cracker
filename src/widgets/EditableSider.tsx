import { Layout } from "antd";
import EditableRow from "../shared/EditableRow/EditableRow";
import { rows } from "../core/signals/signals";

const { Sider } = Layout;

const siderStyles: React.CSSProperties = {
	position: "relative",
	backgroundColor: "#1e1e1e",
	borderRight: "1px solid rgba(204, 204, 204, 0.2)",
	textAlign: "left",
	lineHeight: 120,
};

const EditableSider = () => {
	return (
		<Sider width={400} style={siderStyles}>
			{rows.value.map((row, index) => {
				return <EditableRow key={`${row.name}-${index}`} row={row} />;
			})}
		</Sider>
	);
};

export default EditableSider;
