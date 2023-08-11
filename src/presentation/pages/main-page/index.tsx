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
import { NEWS_API_KEY } from "../../../infra/config/apiKeys";
import { useQuery } from "@tanstack/react-query";
import styles from "./main.page.module.css";

const MainPage: React.FC = () => {
  const fetcher = new FetcherAxios();


  // main post options
  const mainPostOptions: FetcherOptions = {
    url: "https://newsapi.org/v2/everything",
    method: "GET",
    params: {
      q: "tesla",
      from: "2023-08-01",
      sortBy: "publishedAt",
      apiKey: NEWS_API_KEY,
    },
  };

  // popular post options
  const popularPostOptions: FetcherOptions = {
    url: "https://newsapi.org/v2/top-headlines",
    method: "GET",
    params: {
      country: "us",
      category: "technology",
      apiKey: NEWS_API_KEY,
    },
  };

  // health post options
  const healthPostOptions: FetcherOptions = {
    url: "https://newsapi.org/v2/top-headlines",
    method: "GET",
    params: {
      country: "us",
      category: "health",
      apiKey: NEWS_API_KEY,
    },
  }

  // trending post options
  const trendingPostOptions: FetcherOptions = {
    url: "https://newsapi.org/v2/top-headlines",
    method: "GET",
    params: {
      country: "us",
      apiKey: NEWS_API_KEY,
    }
  }

  // get main post data with useQuery
  const { data: mainData, isLoading: isLoadingMain, error: errorMain } = useQuery<Articles>(
    ["main"],
    (): Promise<Articles> => fetcher.request(mainPostOptions)
  );

  // get tech post data with useQuery
  const { data: techData, isLoading: isLoadingTech, error: errorTech } = useQuery<Articles>(
    ["tech"],
    (): Promise<Articles> => fetcher.request(popularPostOptions)
  );

  // get health post data with useQuery
  const { data: healthData, isLoading: isLoadingHealth, error: errorHealth } = useQuery<Articles>(
    ["health"],
    (): Promise<Articles> => fetcher.request(healthPostOptions)
  );

  // get trending post data with useQuery
  const { data: trendingData, isLoading: isLoadingTrending, error: errorTrending } = useQuery<Articles>(
    ["trending"],
    (): Promise<Articles> => fetcher.request(trendingPostOptions)
  );



  if (isLoadingMain || isLoadingTech || isLoadingHealth || isLoadingTrending) return <div>Loading...</div>;

  if (errorMain || errorHealth || errorTech || errorTrending) return <div>Error</div>;

  // console.log(fetchedData?.articles)
  return (
    <Row >
      <Col xs={10}>
        <Space size="large" direction="vertical">
          {mainData?.articles?.map((item, index) => (
            <MainPost key={index} article={item} />
          ))}
        </Space>
      </Col>
      <Col>
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col xs={24} lg={7} >
        <Space direction="vertical" size="large" className={styles['mini-section-container']}>
          <Row>
            <div className={styles['mini-section']}>
              <div>
                {
                  techData?.articles?.map((item, index) => (
                    <div style={{ marginBottom: '1rem' }}>
                      <TechPost key={index} article={item} index={index} />
                    </div>
                  ))
                }
              </div>
            </div>
            <Divider type="horizontal" style={{ width: "100%" }} />
            <div className={styles['mini-section']}>
              <div>
                {
                  healthData?.articles?.map((item, index) => (
                    <div style={{ marginBottom: '1rem' }}>
                      <HealthPost key={index} article={item} />
                    </div>
                  ))
                }
              </div>
            </div>
          </Row>
        </Space>
      </Col>
      <Col>
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col xs={24} lg={6}>
        <div className={styles['popular-section']}>
          <div>
            {
              trendingData?.articles?.map((item, index) => (
                <div style={{ marginBottom: '1rem' }}>
                  <PopularPost key={index} article={item} />
                </div>
              ))
            }
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainPage;
