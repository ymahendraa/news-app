import "./App.css";
import { ConfigProvider } from "antd";

import MainLayout from "./presentation/layouts/MainLayout";
import MainPage from "./presentation/pages/main-page";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./presentation/pages/detail-page";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins",
          colorPrimary: "#6262FF",
        },
      }}
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
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
