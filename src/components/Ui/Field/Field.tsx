import { FunctionComponent, FieldsetHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Field.module.scss';

interface IFieldProps extends FieldsetHTMLAttributes<HTMLInputElement> {
  type: string;
  value: string;
  name: string;
  placeholder: string;
  isValidate: boolean;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Field: FunctionComponent<IFieldProps> = ({
  type,
  name,
  value,
  placeholder,
  isValidate,
  onInput,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onInput={onInput}
      className={clsx(styles.field, {
        [styles.validate]: isValidate,
      })}
    />
  );
};

export default Field;
