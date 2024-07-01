import { useState } from "react";

export const useForm = (initial = {}) => {
  const [formState, setFormState] = useState(initial);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return { ...formState, formState, setFormState, onInputChange };
};
