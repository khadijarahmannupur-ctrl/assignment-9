"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Book Trusted Tutors For Smarter Learning",
    description:
      "Find experienced tutors, schedule sessions easily, and improve your learning journey with MediQueue.",
    image:
      "https://i.ibb.co.com/xtDwFSkt/Interior-Design-Business-Workshop-Retreat.jpg",
  },

  {
    id: 2,
    title: "Online & Offline Learning Made Simple",
    description:
      "Choose your preferred learning style and connect with tutors anytime from anywhere.",
    image:
      "https://i.ibb.co.com/ZYW3VTp/teacher-giving-online-class.jpg",
  },

  {
    id: 3,
    title: "Build Skills With Expert Mentors",
    description:
      "Get personalized tutoring sessions from qualified mentors for every subject.",
    image:
      "https://i.ibb.co.com/4R1xY8T/students-learning-together.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* OVERLAY */}
            <div className="w-full h-full bg-gradient-to-r from-[#005461]/90 via-[#018790]/70 to-[#00B7B5]/40">
              <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  {/* BADGE */}
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#00FFD1]"></span>

                    <p className="text-sm font-medium">
                      Smart Tutor Booking Platform
                    </p>
                  </div>

                  {/* TITLE */}
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    {slide.title}
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="text-lg text-gray-200 leading-8 mb-8 max-w-xl">
                    {slide.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Link href="/tutors">
                      <button className="px-8 h-14 rounded-full bg-white text-[#005461] font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
                        Explore Tutors
                      </button>
                    </Link>

                    <button className="px-8 h-14 rounded-full border border-white/30 backdrop-blur-md text-white font-semibold hover:bg-white hover:text-[#005461] transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index
                ? "w-10 h-3 rounded-full bg-white"
                : "w-3 h-3 rounded-full bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;