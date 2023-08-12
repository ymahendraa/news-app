import { Button, Space, Tooltip, Typography } from "antd";
import { FaShare, FaBookmark } from "react-icons/fa";
import styles from "./detail.module.css";
const { Text } = Typography;

const Info: React.FC = () => {
  return (
    <div className={styles.info}>
      <Space direction="vertical" align="start" size="large">
        <Tooltip title="share">
          <Button size="large" shape="circle" icon={<FaShare size={20} />} />
        </Tooltip>
        <Tooltip title="save">
          <Button size="large" shape="circle" icon={<FaBookmark size={20} />} />
        </Tooltip>
      </Space>
      <Space direction="vertical" align="start" size={1}>
        <Text strong>25 123</Text>
        <Text>People saw</Text>
      </Space>
    </div>
  );
};

export default Info;
