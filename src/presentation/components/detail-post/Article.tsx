import styles from './detail.module.css'
import { Space, Typography } from 'antd'
import { FaShare, FaBookmark } from 'react-icons/fa'
const { Title, Paragraph, Text } = Typography;
const Article = () => {
    return (
        <article className={styles.article}>
            <Space className={styles.category} >
                <Text style={{ color: "#5842FF" }} strong>
                    Travel
                </Text>
                <Text>5 March 2023</Text>
            </Space>
            <Space direction="vertical" size={1} style={{ textAlign: "left" }}>
                <Title level={1}>Five easy way how you can travel cheap and safe</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus odio at luctus faucibus. Phasellus congue luctus justo in dignissim. Donec laoreet, tortor ut pulvinar semper, quam arcu interdum enim, sed dignissim felis velit eu risus. Nulla pharetra blandit diam, vel gravida neque elementum at. Maecenas vel odio in dolor consectetur luctus. Curabitur vehicula hendrerit ligula, a sollicitudin velit faucibus nec. Cras ornare finibus mattis. Suspendisse potenti. Nam eu ante quis metus aliquet volutpat non vel ipsum.
                </Paragraph>
                <Paragraph>
                    Integer sodales sem et dui pretium, ut finibus tortor mollis. Duis et massa et mi ornare facilisis ac id libero. Donec et quam nisi. Proin condimentum, nisi ut fermentum convallis, mauris ante vulputate sapien, ut consectetur nulla urna ut justo. Nulla vitae neque bibendum, feugiat ligula nec, ultrices sem. Curabitur feugiat nisl eu risus porttitor aliquam. Nullam ac ultrices diam. Nullam ligula magna, porttitor sed lacus nec, egestas hendrerit nisi. Curabitur vehicula, urna vel gravida elementum, ante ipsum consectetur massa, ut consectetur mi justo a est. In non neque turpis. Sed sed ullamcorper ligula. Nam tempus orci ex. Quisque a interdum tortor. Pellentesque ornare turpis pretium enim faucibus fermentum.
                </Paragraph>
                <Paragraph>
                    Nam quis quam a justo aliquam maximus vel ut justo. Donec at fringilla dui, eget lobortis dui. Phasellus iaculis sed massa eget sollicitudin. Quisque eget lobortis ipsum, quis mollis metus. Vestibulum ultricies nisl at neque pulvinar, eget blandit mauris venenatis. Quisque laoreet nisl vel metus rutrum faucibus. Vivamus auctor mi vel nisi cursus, vitae volutpat urna auctor. Pellentesque gravida tempus ante nec dapibus. Aliquam sit amet auctor nulla.
                </Paragraph>
                <Paragraph>
                    Nam vitae ornare nulla. Proin rutrum quam id ex condimentum pretium. Ut ac scelerisque augue, vel ultricies leo. Suspendisse pretium metus sed nulla cursus faucibus. Nam consequat congue nisl, vitae dapibus libero consequat sed. Cras sem quam, hendrerit suscipit enim at, auctor sagittis mi. Vestibulum ultrices velit eu lorem tincidunt bibendum.
                </Paragraph>
                <Paragraph>
                    Mauris sed nunc libero. Nullam at magna purus. Fusce facilisis sodales blandit. Suspendisse feugiat mauris nec viverra lobortis. Quisque vehicula ligula nec metus luctus molestie. Nullam imperdiet quam a nisl placerat, pharetra tincidunt justo luctus. Vivamus pellentesque ultrices luctus. Suspendisse ullamcorper ipsum ac molestie tempus. Duis sed condimentum eros, vel blandit dolor. Sed vulputate mauris a pharetra ornare. Mauris eleifend sem aliquet, pellentesque sapien ut, gravida dui. Vivamus gravida quis libero ut malesuada. Proin rutrum, risus eu volutpat blandit, massa nunc feugiat nunc, ac egestas nibh diam nec ante.
                </Paragraph>
            </Space>

        </article>
    )
}

export default Article