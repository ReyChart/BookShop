import { FunctionComponent } from 'react';
import { useAuth } from './useAuth';
import Button from '../Button/Button';
import Field from '../Field/Field';

import styles from './Auth.module.scss';

interface IAuthProps {
  title: string;
}

const fields = ['email', 'password'];

const Auth: FunctionComponent<IAuthProps> = ({ title }) => {
  const { fieldsValue, validate, handleChangeField, handleSubmit } = useAuth();

  return (
    <div className={styles.auth}>
      <h3>{title}</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        {fields.map((field) => (
          <label key={field} className={styles[field]}>
            {field}
            <Field
              type={field === 'email' ? 'email' : 'password'}
              name={field === 'email' ? 'email' : 'password'}
              value={fieldsValue.find((fieldValue) => fieldValue.label === field)?.value || ''}
              placeholder={field === 'email' ? 'Email...' : 'Password...'}
              isValidate={validate === field || validate === 'all'}
              onInput={(e) => handleChangeField(e, field)}
            />
            {validate && (
              <div>
                {validate === 'all' || (field === 'email' && validate === 'email')
                  ? 'Email or password incorrect'
                  : field === 'password' && validate === 'password'
                  ? 'Your password must be at least 6 characters long'
                  : ''}
              </div>
            )}
          </label>
        ))}
        <Button variant="auth">Log in</Button>
      </form>
    </div>
  );
};

export default Auth;
