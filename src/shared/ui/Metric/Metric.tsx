import { FC, HTMLAttributes, memo } from 'react';
import styles from './Metric.module.css';
import cs from 'classnames';

type PropsType = {
  title: string;
  count: string | number;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Metric: FC<PropsType> = memo(({ title, count, className, ...props }) => {
  return (
    <div className={cs(styles.root, className)} {...props}>
      <div>{title}</div>
      <div>{count}</div>
    </div>
  );
});

export default Metric;
