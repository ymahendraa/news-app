import dayjs from "dayjs";
import styles from "./detail.module.css";
import { Space, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

interface PostArticle {
  author: string | undefined;
  title: string | undefined;
  createdDate: string | undefined;
  content: string | undefined;
  url: string | undefined;
}

const PostArticle = ({
  author,
  title,
  createdDate,
  content,
  url,
}: PostArticle) => {
  return (
    <article className={styles.article}>
      <Space className={styles.category}>
        <Text style={{ color: "#5842FF" }} strong>
          {author}
        </Text>
        <Text>{dayjs(createdDate).format("DD MMMM YYYY")}</Text>
      </Space>
      <Space direction="vertical" size={1} style={{ textAlign: "left" }}>
        <Title level={1}>{title}</Title>
        <Paragraph>{content}</Paragraph>
        <Text style={{ color: "#5842FF" }} strong>
          <a href={url} target="_blank">
            see full article
          </a>
        </Text>
      </Space>
    </article>
  );
};

export default PostArticle;
