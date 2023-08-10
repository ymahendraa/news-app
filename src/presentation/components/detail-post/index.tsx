// component import
import { Row, Col } from "antd";
import styles from "./detail.module.css";
import Info from "./Info";
import Content from "./Content";
import PopularPost from "../popular-post";
const DetailPost: React.FC = () => {
  return (
    <Row justify="space-between" gutter={[24, 16]}>
      <Col xs={18}>
        <Content />
      </Col>
      <Col xs={6}>
        <PopularPost />
      </Col>
    </Row>
  );
};

export default DetailPost;
