import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchableTag.module.css';
import { Tag, TagItem } from '@/entities/tag';
import { getSearchRoute, withRootRoute } from '@/shared/const/router';
import { useSearchContext } from '@/shared/contexts/Search';

type PropsType = {
  tag: Tag;
};

const SearchableTag: FC<PropsType> = ({ tag }) => {
  const navigate = useNavigate();
  const { onSearch } = useSearchContext();

  const onTagClick = (title: string) => {
    onSearch(title);
    navigate(withRootRoute(getSearchRoute()));
  };

  return (
    <TagItem
      className={styles.tag}
      key={tag.title}
      title={tag.title}
      onClick={() => onTagClick(tag.title)}
    />
  );
};

export default SearchableTag;
