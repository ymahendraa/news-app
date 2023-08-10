import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ConfigProvider } from "antd";
import MainPost from "./presentation/components/main-post";
import PopularPost from "./presentation/components/popular-post";
import HealthPost from "./presentation/components/health-post";
import TechPost from "./presentation/components/tech-post";
import DetailPost from "./presentation/components/detail-post";
import MainLayout from "./presentation/layouts/MainLayout";
import MainPage from "./presentation/pages/main-page";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins",
          colorPrimary: "#5842FF",
        },
      }}
    >
      <MainLayout>
        <MainPage />
        {/* <MainPost /> */}
        {/* <PopularPost /> */}
        {/* <HealthPost /> */}
        {/* <TechPost /> */}
        {/* <DetailPost /> */}
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
