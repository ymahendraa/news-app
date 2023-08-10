export interface Fetcher {
  request<T>(options: FetcherOptions): Promise<T>;
}

export interface FetcherOptions {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, any>;
  data?: Record<string, any>;
}
