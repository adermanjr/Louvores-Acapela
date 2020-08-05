import { useState } from 'react';

function useForm(initValues) {
  const [values, setValues] = useState(initValues);

  function handleSetInput(k, v) {
    setValues({
      ...values,
      [k]: v,
    });
  }

  function handleChange(infoEvent) {
    const { target } = infoEvent;
    handleSetInput(target.getAttribute('name'), target.value);
  }

  function clearForm() {
    setValues(initValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
