// component import
import { Image } from "antd";
import styles from "./brief.module.css";

interface ImgProps {
  src: string;
}

const Img: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return (
    <Image
      preview={false}
      width={80}
      height={80}
      className={styles.image}
      src={src}
      alt="tech-post"
    />
  );
};

export default Img;
