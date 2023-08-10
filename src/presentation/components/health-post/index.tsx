// component import
import { Space } from "antd";
import Img from "./Img";
import Info from "./Info";
import style from "./brief.module.css";

const HealthPost = () => {
  return (
    <Space direction="horizontal" className={style.container}>
      <Info />
      <Img />
    </Space>
  );
};

export default HealthPost;
