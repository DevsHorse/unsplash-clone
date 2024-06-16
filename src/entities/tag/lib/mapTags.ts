import { FilteredTagDtoType, TagDto } from '../api';
import { Tag, TagType } from '../model';
import { mapTag } from './mapTag';

export const mapTags = (tags: TagDto[]): Tag[] => {
  const filtered = tags.filter(
    (tag) => tag.type === TagType.SEARCH
  ) as FilteredTagDtoType[];

  return filtered.map((dto) => mapTag(dto));
};
