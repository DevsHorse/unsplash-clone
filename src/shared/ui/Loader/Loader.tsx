import { memo } from 'react';
import styles from './Loader.module.css';

const Loader = memo(() => {
  return <div className={styles.root}></div>;
});

export default Loader;
