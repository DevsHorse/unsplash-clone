import { createContext } from 'react';
import { SearchContextSchema } from './types';

export const SearchContext = createContext<SearchContextSchema>({
  page: 1,
  query: '',
  setPage: () => {},
  onSearch: () => {},
  clearSearch: () => {},
});
