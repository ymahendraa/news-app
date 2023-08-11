// component import
import { Space, Typography } from "antd";
import { FaShare, FaBookmark } from 'react-icons/fa';
import styles from './brief.module.css'
import dayjs from "dayjs";

const { Title, Paragraph, Text } = Typography;

interface InfoProps {
  title: string;
  createdDate: string;
  description: string;
}

const Info: React.FC<InfoProps> = ({ title, createdDate, description }: InfoProps) => {
  return (
    <Space direction="vertical" size={0}>
      <Space size="large">
        <Text style={{ color: "#5842FF" }} strong>
          Popular
        </Text>
        <Text>{dayjs(createdDate).format('DD MMMM YYYY')}</Text>
      </Space>
      <Title
        level={4}
        style={{
          marginTop: "10px",
        }}
      >
        {title}
      </Title>
      <Paragraph>
        {description}
      </Paragraph>
      <div className={styles['bottom-info']}>
        <Space direction="vertical" align="start" size={1}>
          <Text strong style={{ fontSize: "18px" }}>
            25 123
          </Text>
          <Text>People saw</Text>
        </Space>
        <Space direction="horizontal" align="start" size={8}>
          <FaShare size={20} />
          <FaBookmark size={20} />
        </Space>
      </div>
    </Space>
  );
};

export default Info;
