// component import
import { Space } from "antd";
import { GoDotFill } from "react-icons/go";
import Img from "./Img";
import Info from "./Info";
import style from "./brief.module.css";

const TechPost = () => {
  return (
    <Space direction="horizontal" className={style.container} size="middle" align="baseline">
      {/* <Img /> */}
      <GoDotFill size={15} color="#5842FF" />
      <Info />
    </Space>
  );
};

export default TechPost;
