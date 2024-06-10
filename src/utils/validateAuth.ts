import { validateEmail } from './regex';

interface IValidateProps {
  error: boolean;
  label: string;
}

export const validateAuth = (email: string, password: string): IValidateProps => {
  if (!(validateEmail.test(email) || password.length >= 6)) {
    return {
      error: true,
      label: 'all',
    };
  }

  if (!validateEmail.test(email)) {
    return {
      error: true,
      label: 'email',
    };
  }

  if (password.length < 6) {
    return {
      error: true,
      label: 'password',
    };
  }

  return { error: false, label: 'all' };
};
