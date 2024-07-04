import { useState } from "react";
import { users } from "../data";

export const validUser = (name, password) => {
  const [error, setError] = useState(false);
  const [formError, setFormError] = useState(false);

  if (name.trim().length === 0 && password.trim().length === 0) {
    setFormError(true);
    return;
  } else {
    setFormError(false);
  }

  const filteredUser = users.filter(
    (user) => user.name === name && user.password === password,
  );

  return { error, formError, filteredUser };
};
