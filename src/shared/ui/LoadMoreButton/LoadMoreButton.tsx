import { ButtonHTMLAttributes, FC, memo } from 'react';
import styles from './LoadMoreButton.module.css';
import cs from 'classnames';
import { Button } from '@/shared/ui/Button';

type PropsType = {
  isLoading: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LoadMoreButton: FC<PropsType> = memo(
  ({ className, isLoading, ...props }) => {
    return (
      <Button className={cs(styles.root, className)} {...props}>
        {isLoading ? 'Loading...' : 'Load more'}
      </Button>
    );
  }
);

export default LoadMoreButton;
