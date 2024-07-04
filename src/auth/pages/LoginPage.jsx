import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import { users } from "../data";

export const LoginPage = () => {
  const [formError, setFormError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const { user, password, onInputChange } = useForm({
    user: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (user.trim().length === 0 || password.trim().length === 0) {
      setFormError(true);
      return;
    } else {
      setFormError(false);
    }

    const filteredUser = users.find(
      (u) => u.name === user && u.password === password,
    );

    if (filteredUser) {
      login(user, password);

      navigate("/", {
        replace: true,
      });
    } else {
      setLoginError(true);
      return;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="flex h-auto w-96 flex-col gap-4 rounded-xl border border-zinc-900 px-8 pb-8 pt-8"
        onSubmit={handleLogin}
      >
        <figure className="h-16">
          <img
            className="mx-auto h-full"
            src="./img/logo.png"
            alt="Left 4 Dead 2"
          />
        </figure>
        <div className="relative">
          <input
            type="text"
            id="user"
            name="user"
            className="peer block w-full appearance-none rounded-lg border border-zinc-900 px-2.5 pb-2.5 pt-5 text-sm text-slate-600 shadow backdrop-blur focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={onInputChange}
          />
          <label
            htmlFor="user"
            className="z-1 pointer-events-none absolute left-2.5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
          >
            Usuario
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            className="peer block w-full appearance-none rounded-lg border border-zinc-900 px-2.5 pb-2.5 pt-5 text-sm text-slate-600 shadow backdrop-blur focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={onInputChange}
          />
          <label
            htmlFor="password"
            className="z-1 pointer-events-none absolute left-2.5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
          >
            Contraseña
          </label>
        </div>
        <button className="h-12 w-full rounded-lg bg-cyan-500 font-semibold uppercase text-gray-100 transition hover:bg-cyan-600">
          Login
        </button>
        {formError && (
          <p className="text-center text-red-500">
            Los campos no deben estar vacíos
          </p>
        )}
        {loginError && (
          <p className="text-center text-red-500">
            Las credenciales son incorrectas
          </p>
        )}
        <p className="text-center text-green-500">usuario: user</p>
        <p className="text-center text-green-500">
          contraseña: MUhGCklcEtV3cv4
        </p>
      </form>
    </div>
  );
};
