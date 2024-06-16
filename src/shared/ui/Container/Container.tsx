import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Container.module.css';
import cs from 'classnames';

type PropsType = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

const Container: FC<PropsType> = ({ children, className, ...props }) => {
  return (
    <div className={cs(styles.root, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
