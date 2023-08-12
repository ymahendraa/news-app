// component import
import { Article } from "../../../domain/models";
import Img from "./Img";
import Info from "./Info";
import styles from "./brief.module.css";

const MainPost = ({ article }: { article: Article }) => {
  return (
    <main>
      <Img src={article.urlToImage} />
      <div className={styles["info-container"]}>
        <Info
          title={article.title}
          description={article.description}
          createdDate={article.publishedAt}
        />
      </div>
    </main>
  );
};

export default MainPost;
