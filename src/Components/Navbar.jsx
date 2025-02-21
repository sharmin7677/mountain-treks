import { useContext } from "react";
import logo from "../assets/logo.png"
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out.",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message,
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500 font-bold" : ""}>Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive ? "text-red-500 font-bold" : ""} to="/updateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive ? "text-red-500 font-bold" : ""} to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive ? "text-red-500 font-bold" : ""} to="/adventure">Adventure Details</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar backdrop-blur-md sticky top-0 z-20  bg-transparent  ">
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
        <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className= "w-10 rounded-full" />
              <h2 className="text-xl font-bold">EVERHIKE</h2>
            </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            {/* Profile Image with Hover */}
            <div className="relative group">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full border cursor-pointer"
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg">
                {user.displayName || "User"}
              </span>
            </div>

            {/* Logout Button */}
            <button onClick={handleLogout} className="btn bg-red-500 text-white">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn bg-red-500 text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
