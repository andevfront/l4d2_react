import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (state.logged) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.logged, state.user]);

  const login = (name = "", password) => {
    const action = {
      type: "[Auth] Login",
      payload: {
        id: 123,
        name: name,
        password: password,
      },
    };

    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: "[Auth] Logout",
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
