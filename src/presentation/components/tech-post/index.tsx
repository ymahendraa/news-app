// component import
import { Space } from "antd";
import { GoDotFill } from "react-icons/go";
import Img from "./Img";
import Info from "./Info";
import style from "./brief.module.css";
import { Article } from "../../../domain/models";

const TechPost = ({ index, article }: { index: number; article: Article }) => {
  return (
    <Space
      direction="horizontal"
      className={style.container}
      size="middle"
      align={index == 0 ? "center" : "baseline"}
    >
      {index == 0 ? (
        <Img src={article.urlToImage} />
      ) : (
        <GoDotFill size={15} color="#5842FF" data-testid="dot-icon" />
      )}

      <Info title={article.title} createdDate={article.publishedAt} />
    </Space>
  );
};

export default TechPost;
