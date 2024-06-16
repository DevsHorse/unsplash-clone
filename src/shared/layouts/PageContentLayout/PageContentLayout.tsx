import { FC, PropsWithChildren } from 'react';
import styles from './PageContentLayout.module.css';
import { Container } from '@/shared/ui/Container';

type PropsType = PropsWithChildren;

const PageContentLayout: FC<PropsType> = ({ children }) => {
  return <Container className={styles.root}>{children}</Container>;
};

export default PageContentLayout;
