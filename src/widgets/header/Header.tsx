import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { SearchBar } from '@/features/searchBar';
import { Logo } from '@/shared/ui/Logo';
import { Container } from '@/shared/ui/Container';
import { getRootRoute } from '@/shared/const/router';

const Header = memo(() => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.content}>
          <Link to={getRootRoute()}>
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.searchContainer}>
            <SearchBar className={styles.searchBar} />
          </div>
        </div>
      </Container>
    </header>
  );
});

export default Header;
