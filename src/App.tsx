import "./styles/index.css";
import { Layout, Space } from "antd";
import EditableSider from "./widgets/EditableSider";

const { Header, Footer, Content } = Layout;

function App() {
	return (
		<Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
			<Layout style={{ height: "100vh" }}>
				<Header className="custom-maintains custom-header"></Header>
				<Layout hasSider>
					<EditableSider />
					<Content className="custom-content"></Content>
				</Layout>
				<Footer className="custom-maintains custom-footer"></Footer>
			</Layout>
		</Space>
	);
}

export default App;
