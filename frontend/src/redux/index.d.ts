import Form from '../components/forms';

declare namespace Redux {
  type State = {
    form: {
      authorization: FormStateAuthorization;
      registration: FormStateRegistration;
      passwordRequestUpdate: FormStatePasswordRequestUpdate;
      passwordUpdate: FormStatePasswordUpdate;
    }
  }
  
  type FormActionTypesAuthorization = {
    fields: {
      [key in Form.InputTypesAuthorization]: {
        value: string;
        isValid: string;
      }
    },
    isValid: string;
  }

  type FormActionTypesRegistration = {
    fields: {
      [key in Exclude<Form.InputTypesRegistration, 'wantBeAdmin'>]: {
        value: string;
        isValid: string;
      }
    } & {
      wantBeAdmin: {
        value: string;
      }
    }
    isValid: string;
  }

  type FormActionTypesPasswordRequestUpdate = {
    fields: {
      [key in Form.InputTypesPasswordRequestUpdate]: {
        value: string;
        isValid: string;
      }
    },
    isValid: string;
  }

  type FormActionTypesPasswordUpdate = {
    fields: {
      [key in Form.InputTypesPasswordUpdate]: {
        value: string;
        isValid: string;
      }
    }
    isValid: string;
  }
}

export = Redux;
export as namespace Redux;
