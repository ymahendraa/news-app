// component import
import Img from "./Img";
import Info from "./Info";
import styles from "./brief.module.css";

const MainPost: React.FC = () => {
  return (
    <main>
      <Img />
      <div className={styles["info-container"]}>
        <Info />
      </div>
    </main>
  );
};

export default MainPost;
