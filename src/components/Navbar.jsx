"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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

  const isDark = resolvedTheme === "dark";

  return (
    <nav className="sticky top-0 z-50 border-b border-[#00B7B5]/10 bg-white dark:bg-[#0B0F19] backdrop-blur-xl shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005461] to-[#00B7B5] flex items-center justify-center text-white font-bold text-lg">
              M
            </div>

            <h1 className="text-2xl font-bold">
              <span className="text-[#005461] dark:text-white">Medi</span>
              <span className="text-[#00B7B5]">Queue</span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#005461] dark:text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-[#00B7B5] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">

            {/* THEME TOGGLE */}
            <button
              onClick={() =>
                setTheme(isDark ? "light" : "dark")
              }
              className="w-11 h-11 rounded-full border border-[#00B7B5]/20 flex items-center justify-center"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>

            {/* AUTH */}
            {isPending ? (
              <div className="w-24 h-11 rounded-full bg-gray-200 animate-pulse"></div>
            ) : user ? (
              <>
                <Link href="/profile">
                  <Image
                    src={user?.image}
                    alt={user?.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full border-2 border-[#00B7B5]"
                  />
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-6 h-11 rounded-full border border-red-200 text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-6 h-11 rounded-full bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white">
                    Login
                  </button>
                </Link>

                <Link href="/signup">
                  <button className="px-6 h-11 rounded-full border border-[#00B7B5]/20 text-[#005461] dark:text-white">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-[#005461] dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B0F19] border-t px-6 py-6">
          <div className="flex flex-col gap-5 text-[#005461] dark:text-white">

            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="w-full h-10 rounded-xl border"
            >
              Toggle Theme
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;