import styles from "./detail.module.css";
import { Image } from "antd";

interface ImgProps {
  src: string | undefined;
}

const Img: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return (
    <Image
      preview={true}
      // width={1000}
      // height={500}
      className={styles.image}
      src={src}
      alt="cover content"
    />
  );
};

export default Img;
