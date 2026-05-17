"use client";

import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#005461] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* LOGO & DESCRIPTION */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#018790] to-[#00B7B5] flex items-center justify-center text-white font-bold text-lg shadow-md">
                M
              </div>

              <h1 className="text-2xl font-bold">
                <span className="text-white">Medi</span>
                <span className="text-[#00B7B5]">Queue</span>
              </h1>
            </div>

            <p className="text-gray-300 leading-7 text-sm">
              MediQueue helps students connect with professional tutors
              easily through a smart and organized tutor booking
              platform.
            </p>
          </div>

          {/* LEARNING SERVICES */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Learning Services
            </h2>

            <div className="flex flex-col gap-3 text-gray-300">
              <Link
                href="/tutors"
                className="hover:text-[#00B7B5] transition-all duration-300"
              >
                Find Tutors
              </Link>

              <Link
                href="/add-tutor"
                className="hover:text-[#00B7B5] transition-all duration-300"
              >
                Become a Tutor
              </Link>

              <Link
                href="/my-booked-sessions"
                className="hover:text-[#00B7B5] transition-all duration-300"
              >
                Booked Sessions
              </Link>

              <Link
                href="/"
                className="hover:text-[#00B7B5] transition-all duration-300"
              >
                Online Learning
              </Link>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Contact Info
            </h2>

            <div className="space-y-3 text-gray-300 text-sm">
              <p>Kaliganj, Dhaka, Bangladesh</p>

              <p>support@mediqueue.com</p>

              <p>+880 1234-567890</p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Follow Us
            </h2>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00B7B5] hover:border-[#00B7B5] transition-all duration-300"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="/"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00B7B5] hover:border-[#00B7B5] transition-all duration-300"
              >
                <FaInstagram />
              </Link>

              <Link
                href="/"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00B7B5] hover:border-[#00B7B5] transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="/"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00B7B5] hover:border-[#00B7B5] transition-all duration-300"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300 text-center md:text-left">
            © 2026 MediQueue. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-300">
            <Link
              href="/"
              className="hover:text-[#00B7B5] transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="hover:text-[#00B7B5] transition-all duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;