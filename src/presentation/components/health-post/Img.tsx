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
      width={40}
      height={40}
      className={styles.image}
      src={src}
      alt="health-post"
    />
  );
};

export default Img;
