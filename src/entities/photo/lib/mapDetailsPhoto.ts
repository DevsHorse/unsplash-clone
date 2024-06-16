import { DetailsPhotoDto } from '../api';
import { DetailsPhoto } from '../model';
import { mapUser } from '@/entities/user/@x/photo';
import { mapTags } from '@/entities/tag/@x/photo';

export const mapDetailsPhoto = (dto: DetailsPhotoDto): DetailsPhoto => ({
  id: dto.id,
  alt_description: dto.alt_description,
  color: dto.color,
  description: dto.description,
  likes: dto.likes,
  created_at: dto.created_at,
  user: mapUser(dto.user),
  urls: {
    full: dto.urls.full,
    regular: dto.urls.regular,
    small: dto.urls.small,
    small_s3: dto.urls.small_s3,
    thumb: dto.urls.thumb,
  },
  tags: mapTags(dto.tags),
  downloads: dto.downloads,
  views: dto.views,
});
