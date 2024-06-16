import { Dispatch, SetStateAction } from 'react';

export type SearchContextSchema = {
  query: string;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  onSearch: (value: string) => void;
  clearSearch: () => void;
};
