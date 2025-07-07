// Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger ikonalar uchun

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img src="/logo.svg" alt="Elite Robots" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/products" className="hover:text-indigo-600">
            Products
          </Link>
          <Link to="/applications" className="hover:text-indigo-600">
            Applications
          </Link>
          <Link to="/company" className="hover:text-indigo-600">
            Company
          </Link>
          <Link to="/resources" className="hover:text-indigo-600">
            Resources
          </Link>
          <Link to="/news" className="hover:text-indigo-600">
            News
          </Link>
          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          <nav className="flex flex-col gap-3 text-gray-700 text-sm font-medium">
            <Link to="/products" className="hover:text-indigo-600">
              Products
            </Link>
            <Link to="/applications" className="hover:text-indigo-600">
              Applications
            </Link>
            <Link to="/company" className="hover:text-indigo-600">
              Company
            </Link>
            <Link to="/resources" className="hover:text-indigo-600">
              Resources
            </Link>
            <Link to="/news" className="hover:text-indigo-600">
              News
            </Link>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
