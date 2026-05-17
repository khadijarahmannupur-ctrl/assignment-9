"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tutors", path: "/tutors" },
    { name: "Add Tutor", path: "/add-tutor" },
    { name: "My Tutors", path: "/my-tutors" },
    { name: "Booked Sessions", path: "/my-booked-sessions" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#00B7B5]/10 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005461] to-[#00B7B5] flex items-center justify-center text-white font-bold text-lg shadow-md">
              M
            </div>

            <h1 className="text-2xl font-bold">
              <span className="text-[#005461]">Medi</span>
              <span className="text-[#00B7B5]">Queue</span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#005461]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-[#00B7B5] transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4 relative">
            {/* THEME BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-full border border-[#00B7B5]/20 flex items-center justify-center text-[#005461] hover:bg-[#00B7B5] hover:text-white transition-all duration-300"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* PROFILE */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-11 h-11 rounded-full bg-gradient-to-r from-[#018790] to-[#00B7B5] flex items-center justify-center text-white text-xl shadow-md"
              >
                <FaUserCircle />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-14 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 p-3">
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/profile"
                      className="px-4 py-2 rounded-xl hover:bg-[#F4F4F4] transition-all duration-300 text-[#005461]"
                    >
                      Profile
                    </Link>

                    <button className="text-left px-4 py-2 rounded-xl hover:bg-[#F4F4F4] transition-all duration-300 text-red-500">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* LOGIN BUTTON */}
            <Link href="/login">
              <button className="px-6 h-11 rounded-full bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                Login
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-[#005461]"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#00B7B5]/10 px-6 py-6">
          <div className="flex flex-col gap-5 text-[#005461] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-[#00B7B5] transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/login">
              <button className="w-full mt-2 h-11 rounded-full bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;