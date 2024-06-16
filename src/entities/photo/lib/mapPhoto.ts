import { PhotoDto } from '../api';
import { Photo } from '../model';
import { mapUser } from '@/entities/user/@x/photo';

export const mapPhoto = (dto: PhotoDto): Photo => ({
  id: dto.id,
  alt_description: dto.alt_description,
  liked_by_user: dto.liked_by_user,
  color: dto.color,
  user: mapUser(dto.user),
  urls: {
    full: dto.urls.full,
    regular: dto.urls.regular,
    small: dto.urls.small,
    small_s3: dto.urls.small_s3,
    thumb: dto.urls.thumb,
  },
});
