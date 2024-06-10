import { FormEvent, useState, useMemo, useCallback } from 'react';
import { useAction } from '@/hooks/useAction';
import { IReqBodyProps } from '@/app/api/auth/route';
import { validateAuth } from '@/utils/validateAuth';
import axios from 'axios';

interface IFieldsValueProps {
  label: string;
  value: string;
}

export const useAuth = () => {
  const { LOGIN } = useAction();
  const [validate, setValidate] = useState<string>('');
  const [fieldsValue, setFieldsValue] = useState<IFieldsValueProps[]>([
    { label: 'email', value: '' },
    { label: 'password', value: '' },
  ]);

  const handleFetch = useCallback(
    async (body: IReqBodyProps) => {
      try {
        const { data } = await axios.post('/api/auth', body, {
          headers: { 'Content-Type': 'application/json' },
        });
        LOGIN(data);
      } catch (error) {
        console.log(error);
      }
    },
    [LOGIN]
  );

  const handleChangeField = useCallback(
    (e: FormEvent<HTMLInputElement>, variant: string) => {
      setFieldsValue((prev) => {
        return prev.map((item) => {
          if (item.label === variant) {
            item = { ...item, value: (e.target as HTMLInputElement).value };
          }
          return item;
        });
      });
      setValidate('');
    },
    [setValidate]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);
      const validation = validateAuth(
        formData.get('email') as string,
        formData.get('password') as string
      );

      if (validation.error) {
        setValidate(validation.label);

        return;
      }

      handleFetch({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      });
    },
    [handleFetch, setValidate]
  );

  return useMemo(
    () => ({
      validate,
      fieldsValue,
      handleChangeField,
      handleSubmit,
    }),
    [validate, fieldsValue, handleChangeField, handleSubmit]
  );
};
