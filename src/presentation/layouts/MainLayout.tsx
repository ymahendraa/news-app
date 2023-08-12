import { Button, Layout, Tooltip, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { BsBookmarks } from 'react-icons/bs'

const { Content, Sider } = Layout;


const MainLayout = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  // define navigate
  const navigate = useNavigate();

  // define array for rendering icons
  const items = [
    {
      key: "1",
      name: 'home',
      icon: <AiFillHome size={24} />,
      url: "/",
    },
    {
      key: "2",
      name: 'search',
      icon: <AiOutlineSearch size={24} />,
      url: "#",
    },
    {
      key: "3",
      name: 'bookmark',
      icon: <BsBookmarks size={24} />,
      url: "#",
    }
  ]

  return (
    <Layout hasSider>
      <Sider
        width={80}
        style={{
          background: colorPrimary,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'center',
          overflow: "auto",
          height: "70vh",
          position: "fixed",
          borderRadius: '50px',
          left: '1%',
          top: '50%',
          bottom: 0,
          transform: "translateY(-50%)"
        }}
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: '2rem',
          justifyContent: 'center',
          height: '100%',
        }}>

          {/* map icon */}
          {items.map((item, index) => (
            <Tooltip title={item.name} key={index}>
              <Button onClick={() => navigate(item.url)} size="large" shape="circle" icon={item.icon} data-testid={item.name} />
            </Tooltip>
          ))}
        </div>


        {/* <Menu mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
      </Sider>
      <Layout style={{ marginLeft: "100px", paddingTop: 15 }}>
        <Content
          style={{
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
