// component import
import { Space } from "antd";
import Img from "./Img";
import Info from "./Info";
import style from "./brief.module.css";
const PopularPost = () => {
  return (
    <Space direction="vertical" align="center" className={style.container}>
      <Img />
      <Info />
    </Space>
  );
};

export default PopularPost;
