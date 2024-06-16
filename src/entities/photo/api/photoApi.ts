import { DetailsPhoto, Photo } from '../model';
import {
  PhotoDto,
  DetailsPhotoDto,
  GetAllPhotosArgs,
  GetDetailsPhotoArgs,
  SearchPhotosArgs,
  SearchPhotosResponse,
  SearchPhotosTransformedResponse,
} from './types';
import { mapPhoto, mapDetailsPhoto } from '../lib';
import { baseApi } from '@/shared/api/baseApi';

const defaultPageSize = 24;

export const photoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPhotos: build.query<Photo[], GetAllPhotosArgs>({
      query: ({ page, per_page }) => ({
        url: `/photos`,
        params: {
          page: page || 1,
          per_page: per_page || defaultPageSize,
        },
      }),
      transformResponse: (response: PhotoDto[]) => response.map(mapPhoto),
    }),

    getDetailsPhoto: build.query<DetailsPhoto, GetDetailsPhotoArgs>({
      query: ({ id }) => ({
        url: `/photos/${id}`,
      }),
      transformResponse: (response: DetailsPhotoDto) =>
        mapDetailsPhoto(response),
    }),

    searchPhotos: build.query<
      SearchPhotosTransformedResponse,
      SearchPhotosArgs
    >({
      query: ({ page, per_page, query }) => ({
        url: `/search/photos`,
        params: {
          page: page || 1,
          per_page: per_page || defaultPageSize,
          query: query,
        },
      }),
      transformResponse: (response: SearchPhotosResponse) => {
        return {
          total: response.total,
          total_pages: response.total_pages,
          photos: response.results.map(mapPhoto),
        };
      },
    }),
  }),
});

export const {
  useGetAllPhotosQuery,
  useGetDetailsPhotoQuery,
  useSearchPhotosQuery,
} = photoApi;
