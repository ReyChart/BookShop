import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FunctionComponent<IButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button className={styles.btn} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
