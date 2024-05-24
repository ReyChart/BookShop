import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FunctionComponent<IButtonProps> = ({ children, variant, disabled, onClick }) => {
  return (
    <button
      className={clsx(styles.btn, {
        [styles.auth]: variant === 'auth',
        [styles.cart]: variant === 'cart',
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
