import { Link, NavLink } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

export const Header = () => {
  return (
    <header className="bg-black py-5 text-white">
      <div className="container mx-auto flex items-center gap-5">
        <Link to="/">
          <figure className="h-9">
            <img className="h-full" src="./img/logo.png" alt="left 4 dead 2" />
          </figure>
        </Link>
        <nav className="ml-20">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/survivors"
                className={({ isActive }) =>
                  `${isActive && "active"} flex w-[186px] items-center justify-center gap-2 rounded-lg p-2 px-3 transition-[background-color] duration-300 hover:bg-white/10`
                }
              >
                <figure className="h-7">
                  <img className="h-full" src="./img/survivors.png" alt="" />
                </figure>
                Surpervivientes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/infected"
                className={({ isActive }) =>
                  `${isActive && "active"} flex w-[150px] items-center justify-center gap-2 rounded-lg p-2 px-3 transition-[background-color] duration-300 hover:bg-white/10`
                }
              >
                <figure className="h-7 w-7">
                  <img
                    className="h-full w-full"
                    src="./img/infected.png"
                    alt=""
                  />
                </figure>
                Infectados
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="ml-auto flex items-center gap-2 rounded-lg p-2 px-3 transition-all duration-200 hover:bg-white/10">
          <RiLogoutBoxLine className="h-5 w-5" />
          Salir
        </button>
      </div>
    </header>
  );
};
