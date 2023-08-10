import React from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    // label: `nav ${index + 1}`,
}));
const MainLayout = ({ children }: { children: JSX.Element }) => {
    const {
        token: { colorPrimary },
    } = theme.useToken();

    return (
        <Layout hasSider>
            <Sider
                width={80}
                style={{
                    background: colorPrimary,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="demo-logo-vertical" />
                ini sidebar
                {/* <Menu mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
            </Sider>
            <Layout style={{ marginLeft: 105, paddingTop: 15 }}>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout