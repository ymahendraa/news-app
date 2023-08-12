// component import
import { Row, Col } from "antd";
import Content from "./Content";
import PopularPost from "../popular-post";
import { Article, Articles } from "../../../domain/models";

interface DetailPostProps {
  detail: Articles | undefined;
}

const DetailPost: React.FC<DetailPostProps> = ({ detail }: DetailPostProps) => {
  // detailSelection : function to selection details with urlToImage != null
  // @params: data: string
  // @return: void
  function detailSelection(data: Articles | undefined): any {
    const selectedIndex: any = data?.articles.findIndex(
      (value) => !value.content.includes("<li>")
    );
    return selectedIndex;
  }

  // define index
  const index: any = detailSelection(detail);
  return <Content article={detail?.articles[index]} />;
};

export default DetailPost;
