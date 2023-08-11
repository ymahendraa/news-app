import styles from "./brief.module.css";
import { Image } from "antd";

interface ImgProps {
  src: string;
}
const Img: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return (
    <Image
      preview={false}
      className={styles.image}
      src={src}
      alt="main"
    />
  );
};

export default Img;
