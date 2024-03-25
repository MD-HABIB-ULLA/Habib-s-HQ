import { NavLink } from "react-router-dom";

const Navber2nd = () => {
  return (
    <div className="navbar   md:px-5 px-4 m-auto shadow bg-[#dec3a9c9] shadow-[#5338314f]">
      <div className="flex w-full flex-row-reverse justify-between">
        <div className="dropdown dropdown-end">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
                }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  lg:border-0 hover:text-[#533831] lg:p-0`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="foods"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
                }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#533831]  lg:p-0`
              }
            >
              {" "}
              Foods
            </NavLink>

            <NavLink
              to="about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
                }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#533831] lg:p-0`
              }
            >
              {" "}
              About
            </NavLink>

            <NavLink
              to="feedback"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
                }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#533831] lg:p-0`
              }
            >
              {" "}
              Feedback
            </NavLink>

            <NavLink
              to="blogs"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
                }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#533831] lg:p-0`
              }
            >
              {" "}
              Blogs
            </NavLink>
          </ul>
        </div>
        <a className="montserrat font-extrabold  text-4xl text-[#533831]">
          Habib'<span className="text-[#6b5d50]">s</span> HQ
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 space-x-6 text-base montserrat1 font-semibold text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
              }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  lg:border-0 hover:text-[#533831] lg:p-0`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="foods"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
              }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#533831]  lg:p-0`
            }
          >
            {" "}
            Foods
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
              }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#533831] lg:p-0`
            }
          >
            {" "}
            About
          </NavLink>

          <NavLink
            to="feedback"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
              }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#533831] lg:p-0`
            }
          >
            {" "}
            Feedback
          </NavLink>

          <NavLink
            to="blogs"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[#533831] font-extrabold" : "text-gray-700"
              }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#533831] lg:p-0`
            }
          >
            {" "}
            Blogs
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navber2nd;
