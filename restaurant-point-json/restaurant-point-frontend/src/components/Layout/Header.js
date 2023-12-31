import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-700 via-purple-600 to-violet-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-4xl font-extrabold hover:text-amber-400">
            ClassiqueCuisine
          </Link>

          <div className="flex space-x-4">
            <Link to="/restaurants" className="text-white text-xl hover:text-amber-400">
              <span className="border-b-2 border-transparent hover:border-gray-200">
                Restaurants
              </span>
            </Link>

            <Link to="/menus" className="text-white text-xl hover:text-amber-400">
              <span className="border-b-2 border-transparent hover:border-gray-200">
                Menus
              </span>
            </Link>

            <Link to="/menuItems" className="text-white text-xl hover:text-amber-400">
              <span className="border-b-2 border-transparent hover:border-gray-200">
                Menu Items
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
