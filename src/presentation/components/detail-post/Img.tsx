import styles from "./detail.module.css";
import { Image } from "antd";
const Img: React.FC = () => {
    return (
        <Image
            preview={true}
            // width={1000}
            // height={500}
            className={styles.image}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="cover content"
        />
    );
};

export default Img;
