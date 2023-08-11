// component import
import { Typography, Space } from "antd";
import styles from "./brief.module.css";
import { FaBookmark, FaShare } from "react-icons/fa";
import dayjs from "dayjs";
import { createSearchParams, useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

interface InfoProps {
  title: string;
  description: string;
  createdDate: string;
}

const Info: React.FC<InfoProps> = ({ title, description, createdDate }: InfoProps) => {
  const navigate = useNavigate();
  return (
    <Space direction="vertical" className={styles.info} size={0}>
      <Space className={styles.category} align="start">
        <Text style={{ color: "#5842FF" }} strong>
          Tesla
        </Text>
        <Text>{dayjs(createdDate).format('DD MMMM YYYY')}</Text>
      </Space>
      <Space direction="vertical" size={1} style={{ textAlign: "left", marginTop: '-15px' }}>
        <Title level={2}
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate({
              pathname: '/detail',
              search: createSearchParams({
                title,
                description
              }).toString(),
            });
          }}
        >
          {title}
        </Title>
        <Paragraph>
          {description}
        </Paragraph>
      </Space>
      <div className={styles['bottom-info']}>
        <Space direction="vertical" align="start" size={1}>
          <Text style={{ color: "#5842FF" }} strong>
            25 123
          </Text>
          <Text>People saw</Text>
        </Space>
        <Space direction="horizontal" align="start" size={12}>
          <FaShare size={20} />
          <FaBookmark size={20} />
        </Space>
      </div>
    </Space>
  );
};

export default Info;
