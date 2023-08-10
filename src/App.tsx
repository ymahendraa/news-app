import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ConfigProvider } from "antd";
import MainPost from "./presentation/components/main-post/brief";
import PopularPost from "./presentation/components/popular-post/brief";
import HealthPost from "./presentation/components/health-post/brief";
import TechPost from "./presentation/components/tech-post/brief";
import DetailPost from "./presentation/components/detail-post";
import MainLayout from "./presentation/layouts/MainLayout";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins", colorPrimary: '#5842FF'
        },
      }}
    >
      <MainLayout>
        {/* <MainPost /> */}
        {/* <PopularPost /> */}
        {/* <HealthPost /> */}
        {/* <TechPost /> */}
        <DetailPost />
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
