import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const HamburguerMenu = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div
      className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} fixed inset-0 h-full w-full bg-black/50 transition-all duration-300`}
    >
      <div
        className={`${isOpen ? "visible left-0 opacity-100" : "invisible -left-full opacity-0"} h-full w-[300px] border-r border-zinc-900 bg-black p-5`}
      >
        <Link to="/">
          <figure className="h-11">
            <img
              className="mx-auto h-full"
              src="/img/logo.png"
              alt="left 4 dead 2"
            />
          </figure>
        </Link>
        <nav className="mt-20">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/survivors"
                className={({ isActive }) =>
                  `${isActive && "active"} flex items-center gap-2 rounded-lg p-2 px-3 transition-[background-color] duration-300 hover:bg-white/10`
                }
                onClick={toggleMenu}
              >
                <figure className="h-7 w-7">
                  <img className="h-full" src="/img/survivors.png" alt="" />
                </figure>
                Sobrevivientes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/infected"
                className={({ isActive }) =>
                  `${isActive && "active"} flex items-center gap-2 rounded-lg p-2 px-3 transition-[background-color] duration-300 hover:bg-white/10`
                }
                onClick={toggleMenu}
              >
                <figure className="h-7 w-7">
                  <img
                    className="h-full w-full"
                    src="/img/infected.png"
                    alt=""
                  />
                </figure>
                Infectados
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  `${isActive && "active"} flex items-center gap-2 rounded-lg p-2 px-3 transition-[background-color] duration-300 hover:bg-white/10`
                }
                onClick={toggleMenu}
              >
                <IoIosSearch className="h-7 w-7" />
                Buscar
              </NavLink>
            </li>
            <li>
              <button
                className="flex w-full items-center gap-2 rounded-lg p-2 px-3 transition-all duration-200 hover:bg-white/10"
                onClick={handleLogout}
              >
                <RiLogoutBoxLine className="h-7 w-7" />
                Salir
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
