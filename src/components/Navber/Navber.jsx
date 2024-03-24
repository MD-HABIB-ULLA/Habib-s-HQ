import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div className=" md:px-5 px-1 m-auto shadow bg-[#dec3a9c9] shadow-[#5338314f]">
      <div className="navbar bg-transparent lg:flex-row flex-col ">
        <div className="flex-1">
          <a className="montserrat font-extrabold  text-4xl text-[#533831]">
            Habib'<span className="text-[#6b5d50]">s</span> HQ
          </a>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1 space-x-6 text-base montserrat1 font-semibold text-center">
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
    </div>
  );
};

export default Navber;
