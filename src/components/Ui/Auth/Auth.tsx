import { FunctionComponent } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import Field from '../Field/Field';
import { useAuth } from './useAuth';

import styles from './Auth.module.scss';

interface IAuthProps {
  title: string;
}

const fields = ['email', 'password'];

const Auth: FunctionComponent<IAuthProps> = ({ title }) => {
  const { fieldsValue, handleChangeField, handleSubmit } = useAuth();
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    router.push('/profile');
  };

  return (
    <div className={styles.auth}>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <label key={field} className={styles[field]}>
            {field}
            <Field
              type={field === 'email' ? 'email' : 'password'}
              name={field}
              value={fieldsValue.find((fieldValue) => fieldValue.label === field)?.value || ''}
              placeholder={field === 'email' ? 'Email...' : 'Password...'}
              onInput={(e) => handleChangeField(e, field)}
            />
          </label>
        ))}
        <Button variant="auth">Log in</Button>
      </form>
    </div>
  );
};

export default Auth;
