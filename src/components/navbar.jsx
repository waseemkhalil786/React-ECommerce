import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="flex items-center justify-around bg-gray-500 p-2 text-center sticky top-0">
      <div className="text-white text-2xl font-bold">
        <Link to={"/"}>
        <img
          src="data:image/jpeg;base64,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"
          alt="Wkdeveloper"
          className="w-16 h-14 rounded-full"
        />    </Link>
      </div>

      <div className="md:hidden">
        <button
          className="text-white text-3xl focus:outline-none"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35Xpndp4PIv5kEL5_U3bs6vcb1PTw8JdL_g&s"
            alt=""
            className="w-14 h-10 rounded-3xl "
          />
        </button>
      </div>

      <ul
        className={`${
          isMobile ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 md:bg-transparent md:flex md:items-center md:static md:w-auto md:space-x-6`}
      >
        <li className="text-white p-4 text-xl font-serif md:p-0">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li className="text-white p-4 text-xl font-serif md:p-0">
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
        </li>
        <li className="text-white p-4 text-xl font-serif md:p-0">
          <Link to="/contact" className="hover:text-gray-200">
            Contact US
          </Link>
        </li>
        <li className="text-white p-4 text-xl font-serif md:p-0">
          <Link to="/login" className="hover:text-gray-200">
            SignIn
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
