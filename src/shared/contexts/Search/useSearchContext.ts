import { useContext } from 'react';
import { SearchContext } from './searchContext';

export const useSearchContext = () => {
  return useContext(SearchContext);
};
