interface IRequestOptions {
  method: string;
  url: string;
}

class ApiCallError extends Error {
  name = 'ApiCallError';
  type = 'ApiCallError';
}

export interface IApiListResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: Array<T>;
}

export default class Api {
  constructor() {}

  async request<Response = any>(options: IRequestOptions): Promise<Response> {
    try {
      const response = await fetch(options.url, { method: options.method });
      return response.json();
    } catch (error) {
      throw new ApiCallError();
    }
  }

  async get<Response = any>(url: string): Promise<Response> {
    return await this.request({ url, method: 'GET' });
  }
}
