// component import
import { Space, Typography } from "antd";
import styles from './brief.module.css'

const { Title, Paragraph, Text } = Typography;
const Info: React.FC = () => {
  return (
    <Space direction="vertical" size={0}>
      <Space size="middle" >
        <Text style={{ color: "#5842FF" }} strong>
          Health
        </Text>
        <Text>2 hours ago</Text>
      </Space>
      <Title
        level={5}
        style={{
          marginTop: "2px",
        }}
      >
        The power of art in a political age is more impressive
      </Title>

    </Space>
  );
};

export default Info;
