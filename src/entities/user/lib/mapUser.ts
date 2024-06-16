import { UserDto } from '../api';
import { User } from '../model';

export const mapUser = (dto: UserDto): User => ({
  id: dto.id,
  name: dto.name,
  bio: dto.bio,
  profile_image: {
    large: dto.profile_image.large,
    medium: dto.profile_image.medium,
    small: dto.profile_image.small,
  },
  links: {
    html: dto.links.html,
  },
});
