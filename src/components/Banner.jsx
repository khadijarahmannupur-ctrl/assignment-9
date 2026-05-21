"use client";

import React from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Book Trusted Tutors For Smarter Learning",
    description:
      "Find experienced tutors, schedule sessions easily, and improve your learning journey with MediQueue.",
    image:
      "https://i.ibb.co.com/ycR0PwxT/Mr-G.jpg",
  },

  {
    id: 2,
    title: "Online & Offline Learning Made Simple",
    description:
      "Choose your preferred learning style and connect with tutors anytime from anywhere.",
    image:
      "https://i.ibb.co.com/bM7ZBT11/GLA-Online-BCA-Admission-and-Fees-Guide.jpg",
  },

  {
    id: 3,
    title: "Build Skills With Expert Mentors",
    description:
      "Get personalized tutoring sessions from qualified mentors for every subject.",
    image:
      "https://i.ibb.co.com/RG83rvdZ/download-1.jpg",
  },
];

const Banner = () => {
  return (
    <section className="w-full h-[75vh] md:h-[90vh] relative">

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full bannerSwiper"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

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
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 dark:bg-[#111827] backdrop-blur-md border border-white/20 mb-6">

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

                        <button className="px-8 h-14 rounded-full bg-white dark:bg-[#111827] text-[#005461] font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
                          Explore Tutors
                        </button>

                      </Link>

                      <button className="px-8 h-14 rounded-full border border-white/30 backdrop-blur-md text-white font-semibold hover:bg-white hover:dark:bg-[#111827] hover:text-[#005461] transition-all duration-300">
                        Learn More
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* CUSTOM SWIPER STYLE */}
      <style jsx global>{`
                .bannerSwiper .swiper-button-next,
                .bannerSwiper .swiper-button-prev {
                    width: 55px;
                    height: 55px;
                    padding: 15px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                    transition: 0.3s;
                }

                .bannerSwiper .swiper-button-next:hover,
                .bannerSwiper .swiper-button-prev:hover {
                    background: white;
                    color: #005461;
                }

                .bannerSwiper .swiper-button-next::after,
                .bannerSwiper .swiper-button-prev::after {
                    font-size: 20px;
                    font-weight: 700;
                }

                @media (max-width: 768px) {
                    .bannerSwiper .swiper-button-next,
                    .bannerSwiper .swiper-button-prev {
                        width: 42px;
                        height: 42px;
                    }

                    .bannerSwiper .swiper-button-next::after,
                    .bannerSwiper .swiper-button-prev::after {
                        font-size: 14px;
                    }
                }
            `}</style>

    </section>
  );
};

export default Banner;