import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>📞 (225) 555-0118</span>
          <span>📧 michelle.rivera@example.com</span>
        </div>
        <div className="hidden md:block italic">Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center space-x-2">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-gray-300" aria-label="Instagram">📷</a>
          <a href="#" className="hover:text-gray-300" aria-label="Facebook">📘</a>
          <a href="#" className="hover:text-gray-300" aria-label="Twitter">🐦</a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <a href="/">Bandage</a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          
          <Link href="/#" className="hover:text-gray-600">Home </Link>
          <Link href="/about" className="hover:text-gray-600">About </Link>
          <Link href="/cart" className="hover:text-gray-600">Cart </Link>
          <Link href="/blog" className="hover:text-gray-600">Blog </Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
          <Link href="/pages" className="hover:text-gray-600">Pages</Link>
          
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-gray-600 font-semibold hover:text-gray-800">Login / Register</a>
          <a href="/search" className="text-gray-700 hover:text-gray-600 text-lg">🔍</a>
          <a href="/cart" className="text-gray-700 hover:text-gray-600 text-lg">🛒</a>
          <a href="/wishlist" className="text-gray-700 hover:text-gray-600 text-lg">❤️</a>
        </div>

        {/* Mobile Menu Toggle (for smaller screens) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-gray-600 text-2xl">☰</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
