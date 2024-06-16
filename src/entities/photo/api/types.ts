import { Photo } from '../model';
import { UserDto } from '@/entities/user/@x/photo';
import { TagDto } from '@/entities/tag/@x/photo';
import { PaginationQuery } from '@/shared/types/PaginationQuery';

export type PhotoDto = {
  id: Id;
  description: null | string;
  alt_description: string;
  liked_by_user: boolean;
  likes: number;
  color: Color;
  user: UserDto;
  created_at: DateIso;
  urls: {
    full: Url;
    regular: Url;
    small: Url;
    small_s3: Url;
    thumb: Url;
  };
};

export type DetailsPhotoDto = PhotoDto & {
  tags: TagDto[];
  downloads: number;
  views: number;
};

export type GetAllPhotosArgs = Partial<PaginationQuery>;

export type GetDetailsPhotoArgs = { id: Id };

export type SearchPhotosArgs = Partial<PaginationQuery> & {
  query: string;
};

export type SearchPhotosResponse = {
  total: number;
  total_pages: number;
  results: PhotoDto[];
};

export type SearchPhotosTransformedResponse = {
  total: number;
  total_pages: number;
  photos: Photo[];
};
