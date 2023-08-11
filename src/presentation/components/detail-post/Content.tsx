// component import
import { Row, Col } from 'antd'
import Info from './Info'
import PostArticle from './Article'
import Img from './Img'

// utils import
import styles from './detail.module.css'
import { Article } from '../../../domain/models'

const Content = ({ article }: { article: Article | undefined }) => {
    return (
        <main className={styles.container}>
            <Img src={article?.urlToImage} />
            {/* <Space direction='horizontal' className={styles['container-content']}> */}
            <Row className={styles['container-content']}>
                <Col xs={4}>
                    <Info />
                </Col>
                <Col xs={20}>
                    <PostArticle />
                </Col>
            </Row>

            {/* </Space> */}

        </main>
    )
}

export default Content