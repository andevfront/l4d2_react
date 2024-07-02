export const LoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="flex h-auto w-96 flex-col gap-4 rounded-xl border border-zinc-900 px-8 pb-8 pt-8">
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
            className="peer block w-full appearance-none rounded-lg border border-zinc-900 px-2.5 pb-2.5 pt-5 text-sm shadow backdrop-blur focus:outline-none focus:ring-0"
            placeholder=" "
            required=""
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
            className="peer block w-full appearance-none rounded-lg border border-zinc-900 px-2.5 pb-2.5 pt-5 text-sm shadow backdrop-blur focus:outline-none focus:ring-0"
            placeholder=" "
            required=""
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
        <p className="text-center text-green-500">usuario: user</p>
        <p className="text-center text-green-500">
          contraseña: MUhGCklcEtV3cv4
        </p>
      </form>
    </div>
  );
};
