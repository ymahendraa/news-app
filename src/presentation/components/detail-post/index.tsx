// component import
import { Row, Col } from "antd";
import Content from "./Content";
import PopularPost from "../popular-post";
import { Articles } from "../../../domain/models";

interface DetailPostProps {
  detail: Articles | undefined;
  trending: Articles | undefined;
}

const DetailPost: React.FC<DetailPostProps> = ({ detail, trending }: DetailPostProps) => {
  return (
    <Row justify="space-between" gutter={[24, 16]}>
      <Col xs={18}>
        <Content article={detail?.articles[0]} />
      </Col>
      <Col xs={6}>
        {
          trending?.articles.map((article, index) => (
            <PopularPost key={index} article={article} />
          ))
        }
      </Col>
    </Row>
  );
};

export default DetailPost;
