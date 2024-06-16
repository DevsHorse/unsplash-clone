import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { LS_KEYS } from '@/shared/const/localStorage';
import { SearchContext } from '@/shared/contexts/Search';

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(
    localStorage.getItem(LS_KEYS.SEARCH_QUERY) || ''
  );

  const onSearch = useCallback((value: string) => {
    localStorage.setItem(LS_KEYS.SEARCH_QUERY, value);
    setPage(1);
    setQuery(value);
  }, []);

  const clearSearch = useCallback(() => {
    localStorage.removeItem(LS_KEYS.SEARCH_QUERY);
    setPage(1);
    setQuery('');
  }, []);

  return (
    <SearchContext.Provider
      value={{
        query,
        page,
        setPage,
        onSearch,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
