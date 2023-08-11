// component import
import { Space } from "antd";
import Img from "./Img";
import Info from "./Info";
import style from "./brief.module.css";
import { Article } from "../../../domain/models";

const HealthPost = ({ article }: { article: Article }) => {
  return (
    <Space direction="horizontal" className={style.container}>
      <Info title={article.title} createdDate={article.publishedAt} />
      <Img src={article.urlToImage} />
    </Space>
  );
};

export default HealthPost;
