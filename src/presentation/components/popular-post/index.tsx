// component import
import { Divider, Space, Row, Col } from "antd";
import Img from "./Img";
import Info from "./Info";
import style from "./brief.module.css";
import { Article } from "../../../domain/models";

const PopularPost = ({ article }: { article: Article }) => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Space direction="vertical" align="center" className={style.container}>
          <Img src={article.urlToImage} />
          <Info title={article.title} description={article.description} createdDate={article.publishedAt} />
        </Space>
      </Col>
      <Divider type="horizontal" style={{ width: '100%' }} />
    </Row>
  );
};

export default PopularPost;
