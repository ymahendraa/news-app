// component import
import { Space, Row, Col } from 'antd'
import Info from './Info'
import Article from './Article'
import Img from './Img'
import styles from './detail.module.css'
const Content = () => {
    return (
        <main className={styles.container}>
            <Img />
            {/* <Space direction='horizontal' className={styles['container-content']}> */}
            <Row className={styles['container-content']}>
                <Col xs={4}>
                    <Info />
                </Col>
                <Col xs={20}>
                    <Article />
                </Col>
            </Row>

            {/* </Space> */}

        </main>
    )
}

export default Content