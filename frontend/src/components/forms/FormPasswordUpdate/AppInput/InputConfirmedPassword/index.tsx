import React from 'react';
import { connect } from 'react-redux';
import InputConfirmedPassword from './InputConfirmedPassword';
import formActions from '../../../../../redux/forms/actions';
import mapStateToPropsWrapper from '../scripts/mapStateToPropsWrapper';

const InputConfirmedPasswordContainer: React.FunctionComponent<Form.IInputPasswordUpdateComfirmedPasswordProps> = ({
  value,
  isValid,
  setValue,
  setIsValid,
  setIsValidForm
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

const mapStateToProps = mapStateToPropsWrapper(inputType);

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setValue: (value: string) => dispatch(formActions.passwordUpdate.setValue(inputType, value)),
    setIsValid: (value: boolean) => dispatch(formActions.passwordUpdate.setIsValid(inputType, value)),
    setIsValidForm: (value: boolean) => dispatch(formActions.passwordUpdate.setIsValidForm(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputConfirmedPasswordContainer);
