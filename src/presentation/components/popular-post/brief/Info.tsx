// component import
import { Space, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;
const Info: React.FC = () => {
  return (
    <Space direction="vertical" size={0}>
      <Space size="large">
        <Text style={{ color: "#5842FF" }} strong>
          Art
        </Text>
        <Text>2 hours ago</Text>
      </Space>
      <Title
        level={4}
        style={{
          marginTop: "10px",
        }}
      >
        The power of art in a political age is more impressive
      </Title>
      <Paragraph>
        I sometimes feel I'm in a daily struggle not to become a shallowe
        version of myself...
      </Paragraph>
      <Space>
        <Space direction="vertical" align="start" size={1}>
          <Text strong style={{ fontSize: "18px" }}>
            25 123
          </Text>
          <Text>People saw</Text>
        </Space>
      </Space>
    </Space>
  );
};

export default Info;
