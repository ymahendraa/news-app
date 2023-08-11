import "./App.css";
import { ConfigProvider } from "antd";

import MainLayout from "./presentation/layouts/MainLayout";
import MainPage from "./presentation/pages/main-page";
import { Route, Routes } from "react-router-dom";
import DetailPost from "./presentation/components/detail-post";
import DetailPage from "./presentation/pages/detail-page";
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
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="home" element={<MainPage />} />
          <Route path="detail" element={<DetailPage />} />
        </Route>
      </Routes>
      {/* <MainLayout>
        <MainPage />
        <MainPost />
        <PopularPost />
        <HealthPost />
        <TechPost />
        <DetailPost />
      </MainLayout> */}
    </ConfigProvider>
  );
}

export default App;
