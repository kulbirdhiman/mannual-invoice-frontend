"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/invoices", label: "Invoices" },
    { href: "/clients", label: "Clients" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500 hover:text-blue-400">
          InvoiceApp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-400">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/profile" className="hover:text-blue-400">
                Profile
              </Link>
              <Link href="/resume" className="hover:text-blue-400">
                View Resume
              </Link>
              <a href="/download-resume" className="hover:text-blue-400" download>
                Download Resume
              </a>
              <button
                onClick={handleLogout}
                className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block hover:text-blue-400">
              {link.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Link href="/profile" className="block hover:text-blue-400">
                Profile
              </Link>
              <Link href="/resume" className="block hover:text-blue-400">
                View Resume
              </Link>
              <a href="/download-resume" className="block hover:text-blue-400" download>
                Download Resume
              </a>
              <button
                onClick={handleLogout}
                className="w-full text-left text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
