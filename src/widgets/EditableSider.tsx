import { Layout } from "antd";
import EditableRow from "../shared/EditableRow/EditableRow";
import { SignalRow, rows } from "../core/signals/signals";

const { Sider } = Layout;

const siderStyles: React.CSSProperties = {
	position: "relative",
	backgroundColor: "#1e1e1e",
	borderRight: "1px solid rgba(204, 204, 204, 0.2)",
	textAlign: "left",
	lineHeight: 120,
};

const EditableSider = () => {
	const handleEnterPressed = (index: number) => {
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
	return (
		<Sider width={400} style={siderStyles}>
			{rows.value.map((row, index) => {
				return (
					<EditableRow
						key={`${row.name}-${index}`}
						row={row}
						onEnterPressed={handleEnterPressed}
					/>
				);
			})}
		</Sider>
	);
};

export default EditableSider;
