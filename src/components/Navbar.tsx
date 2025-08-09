import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Burn Classification</div>
        <div>
          <a href="/" className="text-white px-4 hover:underline">
            Home
          </a>
          <a href="/login" className="text-white px-4 hover:underline">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
