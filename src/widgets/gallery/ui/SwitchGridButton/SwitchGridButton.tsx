import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './SwitchGridButton.module.css';
import cs from 'classnames';
import { Button } from '@/shared/ui/Button';

type PropsType = {
  isActive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

const SwitchGridButton: FC<PropsType> = ({ isActive, children, ...props }) => {
  return (
    <Button
      className={cs({
        [styles.active]: Boolean(isActive),
      })}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SwitchGridButton;
