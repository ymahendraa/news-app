// component import
import { Typography, Space } from "antd";
import styles from "./brief.module.css";
const { Title, Paragraph, Text } = Typography;
const Info: React.FC = () => {
  return (
    <Space direction="vertical" align="start" className={styles.info} size={0}>
      <Space className={styles.category}>
        <Text style={{ color: "#5842FF" }} strong>
          Travel
        </Text>
        <Text>5 March 2023</Text>
      </Space>
      <Space direction="vertical" size={1} style={{ textAlign: "left" }}>
        <Title level={2}>Five easy way how you can travel cheap and safe</Title>
        <Paragraph>
          There is man reason why traveling is useful, interseting and event
          neccessary. It brings you back to life, encourages you to meet new
          people..
        </Paragraph>
      </Space>
      <Space>
        <Space direction="vertical" align="start" size={1}>
          <Text style={{ color: "#5842FF" }} strong>
            25 123
          </Text>
          <Text>People saw</Text>
        </Space>
      </Space>
    </Space>
  );
};

export default Info;
