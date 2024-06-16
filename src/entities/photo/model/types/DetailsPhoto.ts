import { Tag } from '@/entities/tag/@x/photo';
import { User } from '@/entities/user/@x/photo';

export type DetailsPhoto = {
  id: Id;
  description: null | string;
  alt_description: string;
  likes: number;
  color: Color;
  user: User;
  created_at: DateIso;
  urls: {
    full: Url;
    regular: Url;
    small: Url;
    small_s3: Url;
    thumb: Url;
  };
  tags: Tag[];
  downloads: number;
  views: number;
};
