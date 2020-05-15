import React from 'react';
import { connect } from 'react-redux';
import formActions from '../../../../../../redux/forms/actions';
import InputConfirmedPassword from './InputConfirmedPassword';

const InputConfirmedPasswordContainer: React.FunctionComponent<Form.IInputRegistrationConfirmedPasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm,
}) => {
  return (
    <InputConfirmedPassword
      value={ value }
      isValid={ isValid }
      setValue={ setValue }
      setIsValid={ setIsValid }
      setIsValidForm={ setIsValidForm }
    />
  );
}
const inputType = 'confirmedPassword';

const mapStateToProps = (state: Redux.State) => {
  const field = state.form.registration.fields[inputType];

  return {
    value: field.value,
    isValid: field.isValid
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string | boolean) => dispatch(formActions.registration.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.registration.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.registration.setIsValidForm(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputConfirmedPasswordContainer);
