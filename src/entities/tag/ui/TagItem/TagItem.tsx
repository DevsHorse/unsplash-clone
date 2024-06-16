import { FC, HTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './TagItem.module.css';

type PropsType = {
  title: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const TagItem: FC<PropsType> = ({ title, className, ...props }) => {
  return (
    <div className={cs(styles.root, className)} {...props}>
      {title}
    </div>
  );
};

export default TagItem;
