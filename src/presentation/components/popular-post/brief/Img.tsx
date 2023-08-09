// component import
import { Image } from "antd";
import styles from "./brief.module.css";
const Img: React.FC = () => {
  return (
    <Image
      preview={false}
      width={360}
      className={styles.image}
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      alt="main"
    />
  );
};

export default Img;
