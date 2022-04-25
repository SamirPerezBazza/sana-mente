import React from 'react';

export const useForm = (initialState) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

  const handleChange = (name, value) => {
    console.log("NAME=>", name)
    console.log("value=>", value)
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, errors, setErrors, handleChange];


}