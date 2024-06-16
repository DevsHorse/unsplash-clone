import { TagType } from '../model';

export type TagDto = {
  title: string;
  type: TagType;
};

export type FilteredTagDtoType = ChangeFieldType<
  TagDto,
  'type',
  TagType.SEARCH
>;
