const FORM = 'REGISTRATION';

export const CHANGE_FIRST_NAME_VALUE = `${FORM}/CHANGE_FIRST_NAME_VALUE`;
export const CHANGE_IS_VALID_FIRST_NAME = `${FORM}/CHANGE_IS_VALID_FIRST_NAME`;

export const CHANGE_LAST_NAME_VALUE = `${FORM}/CHANGE_LAST_NAME_VALUE`;
export const CHANGE_IS_VALID_LAST_NAME = `${FORM}/CHANGE_IS_VALID_LAST_NAME`;

export const CHANGE_EMAIL_VALUE = `${FORM}/CHANGE_EMAIL_VALUE`;
export const CHANGE_IS_VALID_EMAIL = `${FORM}/CHANGE_IS_VALID_EMAIL`;

export const CHANGE_PASSWORD_VALUE = `${FORM}/CHANGE_PASSWORD_VALUE`;
export const CHANGE_IS_VALID_PASSWORD = `${FORM}/CHANGE_IS_VALID_PASSWORD`;

export const CHANGE_CONFIRMED_PASSWORD_VALUE = `${FORM}/CHANGE_CONFIRMED_PASSWORD_VALUE`;
export const CHANGE_IS_VALID_CONFIRMED_PASSWORD = `${FORM}/CHANGE_IS_VALID_CONFIRMED_PASSWORD`;

export const CHANGE_WANT_BE_ADMIN_VALUE = `${FORM}/CHANGE_WANT_BE_ADMIN_VALUE`;

export const CHANGE_IS_VALID = `${FORM}/CHANGE_IS_VALID`;

const actionTypes: Redux.FormActionTypesRegistration = {
  fields: {
    firstName: {
      value: CHANGE_FIRST_NAME_VALUE,
      isValid: CHANGE_IS_VALID_FIRST_NAME
    },
    lastName: {
      value: CHANGE_LAST_NAME_VALUE,
      isValid: CHANGE_IS_VALID_LAST_NAME
    },
    email: {
      value: CHANGE_EMAIL_VALUE,
      isValid: CHANGE_IS_VALID_EMAIL
    },
    password: {
      value: CHANGE_PASSWORD_VALUE,
      isValid: CHANGE_IS_VALID_PASSWORD
    },
    confirmedPassword: {
      value: CHANGE_CONFIRMED_PASSWORD_VALUE,
      isValid: CHANGE_IS_VALID_CONFIRMED_PASSWORD
    },
    wantBeAdmin: {
      value: CHANGE_WANT_BE_ADMIN_VALUE
    }
  },
  isValid: CHANGE_IS_VALID
}

export const setValue = (inputName: Form.InputTypesRegistration, value: string) => ({
  type: actionTypes.fields[inputName].value,
  payload: value
});

export const setWantBeAdminValue = (value: boolean) => ({
  type: actionTypes.fields.wantBeAdmin.value,
  payload: value
});

export const setIsValid = (inputName: Exclude<Form.InputTypesRegistration, 'wantBeAdmin'>, isValid: boolean) => ({
  type: actionTypes.fields[inputName].isValid,
  payload: isValid
});

export const setIsValidForm = (isValid: boolean) => ({
  type: actionTypes.isValid,
  payload: isValid
});

export default {
  setValue,
  setIsValid,
  setWantBeAdminValue,
  setIsValidForm
}
