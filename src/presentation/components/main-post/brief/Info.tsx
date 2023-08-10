// component import
import { Typography, Space } from "antd";
import styles from "./brief.module.css";
import { FaBookmark, FaShare } from "react-icons/fa";

const { Title, Paragraph, Text } = Typography;
const Info: React.FC = () => {
  return (
    <Space direction="vertical" className={styles.info} size={0}>
      <Space className={styles.category} align="start">
        <Text style={{ color: "#5842FF" }} strong>
          Travel
        </Text>
        <Text>5 March 2023</Text>
      </Space>
      <Space direction="vertical" size={1} style={{ textAlign: "left", marginTop: '-15px' }}>
        <Title level={2}>Five easy way how you can travel cheap and safe</Title>
        <Paragraph>
          There is man reason why traveling is useful, interseting and event
          neccessary. It brings you back to life, encourages you to meet new
          people..
        </Paragraph>
      </Space>
      <div className={styles['bottom-info']}>
        <Space direction="vertical" align="start" size={1}>
          <Text style={{ color: "#5842FF" }} strong>
            25 123
          </Text>
          <Text>People saw</Text>
        </Space>
        <Space direction="horizontal" align="start" size={1}>
          <FaShare size={20} />
          <FaBookmark size={20} />
        </Space>
      </div>
    </Space>
  );
};

export default Info;
