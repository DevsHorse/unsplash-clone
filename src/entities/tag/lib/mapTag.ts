import { FilteredTagDtoType } from '../api';
import { Tag } from '../model';

export const mapTag = (dto: FilteredTagDtoType): Tag => {
  return {
    title: dto.title,
    type: dto.type,
  };
};
