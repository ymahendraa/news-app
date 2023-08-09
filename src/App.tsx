import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ConfigProvider } from "antd";
import MainPost from "./presentation/components/main-post/brief";
import PopularPost from "./presentation/components/popular-post/brief";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins",
        },
      }}
    >
      <div className="App">
        {/* <MainPost /> */}
        <PopularPost />
      </div>
    </ConfigProvider>
  );
}

export default App;
