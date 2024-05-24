import { FunctionComponent, FieldsetHTMLAttributes } from 'react';

import styles from './Field.module.scss';

interface IFieldProps extends FieldsetHTMLAttributes<HTMLInputElement> {
  type: string;
  value: string;
  name: string;
  placeholder: string;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Field: FunctionComponent<IFieldProps> = ({ type, name, value, placeholder, onInput }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onInput={onInput}
      className={styles.field}
    />
  );
};

export default Field;
