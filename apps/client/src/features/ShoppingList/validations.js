const nameValidation = name => (name ? true : 'Item name is required.');
const amountValidation = amount =>
  amount > 0 ? true : 'Item amount is required.';

export const validateCurrentItem = currentItem => {
  const fieldsToValidate = [
    { field: 'name', validation: nameValidation },
    { field: 'amount', validation: amountValidation },
  ];

  let validations = {};
  fieldsToValidate.forEach(fieldValidation => {
    const { field, validation } = fieldValidation;
    const validated = validation(currentItem[field]);
    if (validated !== true) {
      validations[field] = { error: true, errorText: validated };
    } else {
      validations[field] = { error: false, errorText: '' };
    }
  });
  const withErrors = Object.values(validations).some(val => val.error === true);
  return {
    withErrors,
    validations,
  };
};
