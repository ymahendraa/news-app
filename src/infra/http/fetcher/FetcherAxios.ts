import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Fetcher, FetcherOptions } from "../../../data/protocols/Repository";

export class FetcherAxios implements Fetcher {
  async request<T>(options: FetcherOptions): Promise<T> {
    const config: AxiosRequestConfig = {
      method: options.method,
      url: options.url,
      params: options.params,
      data: options.data,
    };

    try {
      const response: AxiosResponse<T> = await axios(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
