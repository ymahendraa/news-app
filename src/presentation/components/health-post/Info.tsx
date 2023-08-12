// component import
import { Space, Typography } from "antd";
import dayjs from "dayjs";
import {
  NavigateFunction,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
// import styles from './brief.module.css'

const { Title, Text } = Typography;

interface InfoProps {
  title: string;
  createdDate: string;
}

const Info: React.FC<InfoProps> = ({ title, createdDate }: InfoProps) => {
  //define navigation
  const navigate: NavigateFunction = useNavigate();
  return (
    <Space direction="vertical" size={0}>
      <Space size="middle">
        <Text style={{ color: "#5842FF" }} strong>
          Health
        </Text>
        <Text>{dayjs(createdDate).format("DD MMMM YYYY")}</Text>
      </Space>
      <Title
        level={5}
        style={{
          marginTop: "2px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate({
            pathname: "/detail",
            search: createSearchParams({
              title,
            }).toString(),
          });
        }}
      >
        {title}
      </Title>
    </Space>
  );
};

export default Info;
