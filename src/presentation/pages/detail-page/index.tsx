// component import
import { useSearchParams } from 'react-router-dom'
import DetailPost from '../../components/detail-post'

// hooks import
import { useQuery } from '@tanstack/react-query'

// utils import
import { NEWS_API_KEY } from '../../../infra/config/apiKeys';
import { FetcherOptions } from '../../../data/protocols/Repository';
import { FetcherAxios } from '../../../infra/http/fetcher/FetcherAxios';
import { Articles } from '../../../domain/models';
const DetailPage = () => {
    // define fetcher
    const fetcher = new FetcherAxios();
    // get params from url
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');

    // detail post options
    const detailPostOptions: FetcherOptions = {
        url: "https://newsapi.org/v2/everything",
        method: "GET",
        params: {
            searchIn: "title",
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
        }
    }

    // get detail post
    const { data: detailData, isLoading: isLoadingDetail, error: errorDetail } = useQuery<Articles>(
        ["main"],
        (): Promise<Articles> => fetcher.request(detailPostOptions)
    );


    // get trending post data with useQuery
    const { data: trendingData, isLoading: isLoadingTrending, error: errorTrending } = useQuery<Articles>(
        ["trending"],
        (): Promise<Articles> => fetcher.request(trendingPostOptions)
    );

    if (isLoadingDetail || isLoadingTrending) {
        return <div>Loading...</div>
    }

    if (errorDetail || errorTrending) {
        return <div>Error</div>
    }

    return (
        <DetailPost detail={detailData} trending={trendingData} />
    )
}

export default DetailPage
