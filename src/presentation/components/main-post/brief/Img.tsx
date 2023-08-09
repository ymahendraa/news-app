import styles from "./brief.module.css";
import { Image } from "antd";
const Img: React.FC = () => {
  return (
    <Image
      preview={false}
      width={490}
      className={styles.image}
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      alt="main"
    />
  );
};

export default Img;
