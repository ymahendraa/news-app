// component import
import DetailPost from "../../components/detail-post";
import PopularPost from "../../components/popular-post";
import { Col, Row } from "antd";

// hooks import
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// utils import
import { NEWS_API_KEY } from "../../../infra/config/apiKeys";
import { FetcherOptions } from "../../../data/protocols/Repository";
import { FetcherAxios } from "../../../infra/http/fetcher/FetcherAxios";
import { Articles } from "../../../domain/models";
import styles from "./detail.module.css";

const DetailPage = () => {
  // define fetcher
  const fetcher = new FetcherAxios();
  // get params from url
  const [searchParams] = useSearchParams();
  // const url = searchParams.get("url");
  const title = searchParams.get("title");

  // detail post options
  const detailPostOptions: FetcherOptions = {
    url: "https://newsapi.org/v2/everything",
    method: "GET",
    params: {
      q: title,
      apiKey: NEWS_API_KEY,
    },
  };

  // trending post options
  const trendingPostOptions: FetcherOptions = {
    url: "https://newsapi.org/v2/top-headlines",
    method: "GET",
    params: {
      country: "us",
      apiKey: NEWS_API_KEY,
    },
  };

  // get detail post
  const {
    data: detailData,
    isLoading: isLoadingDetail,
    error: errorDetail,
  } = useQuery<Articles>(
    ["detail"],
    (): Promise<Articles> => fetcher.request(detailPostOptions)
  );

  // get trending post data with useQuery
  const {
    data: trendingData,
    isLoading: isLoadingTrending,
    error: errorTrending,
  } = useQuery<Articles>(
    ["trending"],
    (): Promise<Articles> => fetcher.request(trendingPostOptions)
  );

  if (isLoadingDetail || isLoadingTrending) {
    return <div>Loading...</div>;
  }

  if (errorDetail || errorTrending) {
    return <div>Error</div>;
  }

  return (
    <Row>
      <Col xs={18}>
        <DetailPost detail={detailData} />
      </Col>
      <Col xs={6}>
        <div className={styles["popular-section"]}>
          <div>
            {trendingData?.articles?.map((item, index) => (
              <div style={{ marginBottom: "1rem" }}>
                <PopularPost key={index} article={item} />
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DetailPage;
