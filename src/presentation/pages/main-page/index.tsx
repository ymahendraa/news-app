// component import
import { Col, Divider, Row, Space } from "antd";
import MainPost from "../../components/main-post";
import TechPost from "../../components/tech-post";
import HealthPost from "../../components/health-post";
import PopularPost from "../../components/popular-post";
import { Article, Articles } from "../../../domain/models";

// utils import
import React, { useState, useEffect } from "react";
import { FetcherAxios } from "../../../infra/http/fetcher/FetcherAxios";
import { FetcherOptions } from "../../../data/protocols/Repository";
const MainPage: React.FC = () => {
  const fetcher = new FetcherAxios();
  const [data, setData] = useState<Articles>();

  const options: FetcherOptions = {
    url: "https://newsapi.org/v2/everything",
    method: "GET",
    params: {
      q: "tesla",
      from: "2023-07-10",
      sortBy: "publishedAt",
      apiKey: "a4b8ff188ffd4c6fbc5648c2192289d0",
    },
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await fetcher.request<Articles>(options);
        // console.log("Result:", result);
        setData(result);
        // return result; // If you want to return the result for further processing
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <Row justify="space-between" gutter={{ lg: 20 }}>
      <Col xs={10}>
        {/* {fetchedData?.articles?.map((item, index) => (
          <MainPost />
        ))} */}
      </Col>
      <Col xs={24} lg={1}>
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col xs={24} lg={6}>
        <Space direction="vertical" size="large">
          <TechPost />
          <HealthPost />
        </Space>
      </Col>
      <Col xs={24} lg={1}>
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col xs={24} lg={6}>
        <PopularPost />
      </Col>
    </Row>
  );
};

export default MainPage;
