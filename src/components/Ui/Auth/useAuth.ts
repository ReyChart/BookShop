import { FormEvent, useState } from 'react';

interface IFieldsValueProps {
  label: string;
  value: string;
}

export const useAuth = () => {
  const [fieldsValue, setFieldsValue] = useState<IFieldsValueProps[]>([
    { label: 'email', value: '' },
    { label: 'password', value: '' },
  ]);

  const handleChangeField = (e: FormEvent<HTMLInputElement>, variant: string) => {
    setFieldsValue((prev) => {
      return prev.map((item) => {
        if (item.label === variant) {
          item = { ...item, value: (e.target as HTMLInputElement).value };
        }
        return item;
      });
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Авторизация
  };

  return {
    fieldsValue,
    handleChangeField,
    handleSubmit,
  };
};
