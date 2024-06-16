import { User } from '@/entities/user/@x/photo';

export type Photo = {
  id: Id;
  alt_description: string;
  liked_by_user: boolean;
  color: Color;
  user: User;
  urls: {
    full: Url;
    regular: Url;
    small: Url;
    small_s3: Url;
    thumb: Url;
  };
};
