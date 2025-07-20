import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">StayFind</div>
      <nav className="flex gap-4 text-gray-700">
        <a href="#">Rooms</a>
        <a href="#">Mansions</a>
        <a href="#">Countryside</a>
      </nav>
      <div className="flex gap-4">
        <button className="text-sm text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
