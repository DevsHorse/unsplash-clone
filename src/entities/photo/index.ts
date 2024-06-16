import {
  useGetAllPhotosQuery,
  useGetDetailsPhotoQuery,
  useSearchPhotosQuery,
} from './api';
import { usePreparePhotos } from './lib';
import { DetailsPhoto, Photo } from './model';
import { PhotoCard } from './ui';

export {
  useGetAllPhotosQuery,
  useGetDetailsPhotoQuery,
  useSearchPhotosQuery,
  type Photo,
  type DetailsPhoto,
  PhotoCard,
  usePreparePhotos,
};
