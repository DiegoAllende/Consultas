import { useState } from 'react'

export const useFormu = (initialState = {}) => {
  const [formu, setFormu] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const { nameError, formuError } = validationsName(name, value);
    const nametouch = validationTouch(name);

    setFormu({
      ...formu,
      values: { ...formu.values, [name]: value },
      errors: { ...formu.errors, ...nameError },
      touched: { ...formu.touched, ...nametouch },
      valid: formuError
    });
  }

  const markAllTouched = () =>{
    const auxError = {};
    const auxTouch = {};
    for (const key in formu.values) {
      const { nameError } = validationsName(key, formu.values[key]);
      const nametouch = validationTouch(key);
      auxError[key] = nameError[key];
      auxTouch[key] = nametouch[key];
    }

    setFormu({
      ...formu,
      errors: { ...formu.errors, ...auxError },
      touched: { ...formu.touched, ...auxTouch },
    });
  }

  const validationsName = (name, value) => {
    const nameError = {};
    let isError = false;
    if (!value.trim() && formu.validations[name]?.requerid) {
      // nameError[name] = `El campo ${formu.errorsName[name]} es obligatorio`;
      nameError[name] = `El campo es obligatorio`;
      isError = true;
    } else if(value.trim().length > 10 && formu.validations[name]?.maxLength){
      nameError[name] = `El campo máximo 10 caracteres`;
      isError = true;
    } else {
      nameError[name] = "";
    }

    let formuError = validationFormu(isError, name);
    return { nameError, formuError };
  }

  const validationTouch = (name) => {
    return { [name]: true };
  }

  const validationFormu = (isError, name) => {
    let respValid = false;

    if (!isError) {
      for (const key in formu.errors) {
        if (formu.errors[key] === "" && formu.touched[key] === true && key !== name) {
          respValid = true;
        }
      }
    }

    return respValid;
  }

  return { formu, handleChange, markAllTouched }
}
