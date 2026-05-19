"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();

    window.location.href = "/";
  };

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
              <span className="text-[#005461]">
                Medi
              </span>

              <span className="text-[#00B7B5]">
                Queue
              </span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#005461]">
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
          <div className="hidden md:flex items-center gap-4">
            {/* THEME BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-full border border-[#00B7B5]/20 flex items-center justify-center text-[#005461] hover:bg-[#00B7B5] hover:text-white transition-all duration-300"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* LOADING */}
            {isPending ? (
              <div className="w-24 h-11 rounded-full bg-gray-200 animate-pulse"></div>
            ) : user ? (
              <>
                {/* PROFILE IMAGE */}
                <Link href="/profile">
                  <Image
                    src={user?.image}
                    alt={user?.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#00B7B5]"
                  />
                </Link>

                {/* LOGOUT BUTTON */}
                <button
                  onClick={handleLogout}
                  className="px-6 h-11 rounded-full border border-red-200 text-red-500 font-medium hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* LOGIN */}
                <Link href="/login">
                  <button className="px-6 h-11 rounded-full bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                    Login
                  </button>
                </Link>

                {/* SIGNUP */}
                <Link href="/signup">
                  <button className="px-6 h-11 rounded-full border border-[#00B7B5]/20 text-[#005461] font-medium hover:bg-[#00B7B5] hover:text-white transition-all duration-300">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-[#005461]"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#00B7B5]/10 px-6 py-6">
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

            {/* MOBILE AUTH */}
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="flex items-center gap-3"
                >
                  <Image
                    src={user?.image}
                    alt={user?.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#00B7B5]"
                  />

                  <span className="font-medium">
                    {user.name}
                  </span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full h-11 rounded-full border border-red-200 text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/login">
                  <button className="w-full h-11 rounded-full bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white">
                    Login
                  </button>
                </Link>

                <Link href="/signup">
                  <button className="w-full h-11 rounded-full border border-[#00B7B5]/20 text-[#005461]">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;