import { FC, ReactElement } from 'react';
import styles from './DefaultLayout.module.css';

type PropsType = {
  headerSlot: ReactElement;
  contentSlot: ReactElement;
};

const DefaultLayout: FC<PropsType> = ({ headerSlot, contentSlot }) => {
  return (
    <div className={styles.root}>
      {headerSlot}
      <div className={styles.contentContainer}>{contentSlot}</div>
    </div>
  );
};

export default DefaultLayout;
