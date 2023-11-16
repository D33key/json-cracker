import "./styles/index.css";
import { Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
	textAlign: "center",
	minHeight: 120,
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
	minWidth: 400,
	textAlign: "center",
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#3ba0e9",
};

function App() {
	return (
		<Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
			<Layout style={{ height: "100vh" }}>
				<Header className="custom-maintains custom-header"></Header>
				<Layout hasSider>
					<Sider style={siderStyle}>Sider</Sider>
					<Content style={contentStyle}>Content</Content>
				</Layout>
				<Footer className="custom-maintains custom-footer"></Footer>
			</Layout>
		</Space>
	);
}

export default App;
