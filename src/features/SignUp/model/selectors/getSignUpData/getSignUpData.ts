/* eslint-disable ulbi-tv-plugin/layer-imports */
import { StateSchema } from '@/app/providers/StorProvider';

export const getSignUpEmail = (state: StateSchema) =>
  state?.SignUp?.email.email || '';

export const getSignUpEmailError = (state: StateSchema) =>
  state?.SignUp?.email.errorMessage || '';

export const getSignUpFullName = (state: StateSchema) =>
  state?.SignUp?.fullName.fullName || '';

export const getSignUpFullNameError = (state: StateSchema) =>
  state?.SignUp?.fullName.errorMessage || '';

export const getSignUpPhone = (state: StateSchema) =>
  state?.SignUp?.mobile || '';

export const getSignUpSex = (state: StateSchema) => state?.SignUp?.sex;

export const getSignUpLocality = (state: StateSchema) =>
  state?.SignUp?.city || '';

export const getSignUpBirthday = (state: StateSchema) =>
  state?.SignUp?.birthday || null;

export const getSignUpPassword = (state: StateSchema) =>
  state?.SignUp?.password.password || '';

export const getSignUpPasswordErrorMessage = (state: StateSchema) =>
  state?.SignUp?.password.errorMessage || '';

export const getSignUpIsLoading = (state: StateSchema) =>
  state?.SignUp?.isLoading || false;

export const getSignUpError = (state: StateSchema) => state?.SignUp?.error;

export const getSignUpNewsMailings = (state: StateSchema) =>
  state?.SignUp?.newsMailings || false;

export const getSignUpDataProcessing = (state: StateSchema) =>
  state?.SignUp?.dataProcessing || false;

export const getSignUpData = (state: StateSchema) => ({
  birthday: state.SignUp?.birthday,
  city: state.SignUp?.city,
  email: state.SignUp?.email.email,
  mobile: state.SignUp?.mobile,
  name: state.SignUp?.fullName.fullName,
  password: state.SignUp?.password.password,
  sex: state.SignUp?.sex,
});

export const getInfo = (state: StateSchema) => {
  const err: string[] = [];
  let isDisplay = false;
  if (state.SignUp) {
    const { email, password, birthday, fullName, sex, dataProcessing, city } =
      state.SignUp;
    if (
      !email.email ||
      email.hasError ||
      !password.password ||
      password.hasError ||
      fullName.hasError ||
      !fullName.fullName ||
      !birthday ||
      !sex ||
      !dataProcessing
    )
      isDisplay = true;

    if (state.SignUp.hasDispatch) {
      if (!email.email) err.push('email');

      if (!password.password) err.push('Пароль');

      if (!birthday) err.push('Дата рождения');

      if (!fullName.fullName) err.push('ФИО');

      if (!city) err.push('Населенный пункт');

      if (!sex) err.push('Пол');

      if (!dataProcessing) err.push('обработка персональных данных');
    }
  }
  return { err, isDisplay };
};
