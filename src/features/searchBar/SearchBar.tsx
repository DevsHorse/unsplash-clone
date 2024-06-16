import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cs from 'classnames';
import styles from './SearchBar.module.css';
import { getSearchRoute } from '@/shared/const/router';
import { useSearchContext } from '@/shared/contexts/Search';
import { SearchIcon } from '@/shared/ui/SearchIcon';

type PropsType = {
  className?: string;
};

const SearchBar: FC<PropsType> = memo(({ className }) => {
  const navigate = useNavigate();
  const { onSearch, query } = useSearchContext();
  const [inputValue, setInputValue] = useState(query);

  const searchHandler = useCallback(() => {
    const searchValue = inputValue.trim();
    if (searchValue) {
      onSearch(searchValue);
      navigate(getSearchRoute());
    }
  }, [onSearch, navigate, inputValue]);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  return (
    <div className={cs(styles.root, className)}>
      <button className={styles.button} onClick={searchHandler}>
        <SearchIcon className={styles.searchIcon} />
      </button>
      <input
        className={styles.input}
        type='text'
        placeholder='Search photos'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            searchHandler();
          }
        }}
      />
    </div>
  );
});

export default SearchBar;
