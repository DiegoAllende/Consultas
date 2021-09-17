import React, { useState } from 'react'

export const useFormu = (initialState = {}, validationsForm) => {
  const [formu, setFormu] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    console.log("change: ", event.target.value);
    setFormu(
      {
        ...formu,
        [event.target.name]: event.target.value,
      }
    );
  }
  
  const handleBlur = () => {
    setErrors(validationsForm(formu));
  }
  

  return { formu, errors, handleChange, handleBlur }
}