import { TagType } from './TagType';

export type Tag = {
  title: string;

  /**
   *
   * Only "search" type, since we do not plan to process others.
   */
  type: TagType.SEARCH;
};
