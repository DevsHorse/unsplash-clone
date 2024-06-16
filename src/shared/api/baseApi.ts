import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { envConfig } from '../lib/envConfig';

export const baseApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: envConfig.API_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Client-ID ${envConfig.API_ACCESS_KEY}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
