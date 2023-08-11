// component import
import { Space, Typography } from "antd";

// utils import
import dayjs from "dayjs";

const { Title, Paragraph, Text } = Typography;

interface InfoProps {
  title: string;
  createdDate: string;
}

const Info: React.FC<InfoProps> = ({ title, createdDate }: InfoProps) => {
  return (

    <Space direction="vertical" size={0}>
      <Title
        level={5}
        style={{
          marginTop: "2px",
        }}
      >
        {title}
      </Title>
      <Space size="middle" >
        <Text style={{ color: "#5842FF" }} strong>
          Tech
        </Text>
        <Text>{dayjs(createdDate).format('DD MMMM YYYY')}</Text>
      </Space>
    </Space>

  );
};

export default Info;
