import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cs from 'classnames';
import styles from './Button.module.css';

type PropsType = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsType> = ({ children, className, ...props }) => {
  return (
    <button type='button' className={cs(styles.root, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
