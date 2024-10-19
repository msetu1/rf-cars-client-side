import { Link, NavLink } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import carLogo from "../../../public/logo.svg";

const Navbar = () => {
  const { user, logOut } = useUsers();

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-bold text-xl text-red-500"
              : "hover:text-red-500 "
          }
        >
          Home
        </NavLink>
      </li>
     
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-bold text-xl text-red-500"
              : " hover:text-red-500"
          }
        >
          Services
        </NavLink>
      </li>

      {user?.email ? (
        <div>
          <li>
            <NavLink
              to="/my-bookings"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-bold text-xl text-red-500"
                  : " hover:text-red-500"
              }
            >
              My Bookings
            </NavLink>
          </li>
          <button
            onClick={handleLogOut}
            className="text-xl font-bold px-6 py-2 hover:text-white rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hidden"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <button className="text-xl font-bold px-6 py-2 hover:text-white rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hidden">
          Login
        </button>
      )}

      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-bold text-xl text-red-500"
              : " hover:text-red-500"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="pb-6">
      <div className="navbar bg-base-100 drop-shadow-xl py-4 fixed z-10 px-[120px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={carLogo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 space-x-4 text-xl font-semibold ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className="text-xl font-bold px-6 py-2 hover:text-white rounded-lg border border-red-500 text-red-500 hover:bg-red-500"
            >
              Sign Up
            </button>
          ) : (
            <Link to="/authentication">
              <button className="text-xl font-bold px-6 py-2 hover:text-white rounded-lg border border-red-500 text-red-500 hover:bg-red-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
