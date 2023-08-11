// component import
import { Space, Typography } from "antd";
import dayjs from "dayjs";
// import styles from './brief.module.css'

const { Title, Paragraph, Text } = Typography;

interface InfoProps {
  title: string;
  createdDate: string;
}

const Info: React.FC<InfoProps> = ({ title, createdDate }: InfoProps) => {
  return (
    <Space direction="vertical" size={0}>
      <Space size="middle" >
        <Text style={{ color: "#5842FF" }} strong>
          Health
        </Text>
        <Text>{dayjs(createdDate).format('DD MMMM YYYY')}</Text>
      </Space>
      <Title
        level={5}
        style={{
          marginTop: "2px",
        }}
      >
        {title}
      </Title>
    </Space>
  );
};

export default Info;
