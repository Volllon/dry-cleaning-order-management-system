import store from "../../../../store";

const isValidForm = (): boolean => {
  const fields = store.getState().form.passwordUpdate.fields;

  for (const field of Object.values(fields)) {
    if (!field.isValid) {
      return false;
    }
  }

  return true;
}

export default isValidForm;
