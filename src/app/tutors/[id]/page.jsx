import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params;

    const {token} = await auth.api.getToken({
        headers: await headers()
    });
    // console.log(token);

    const res = await fetch(`http://localhost:5000/tutors/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        },
        cache: "no-store",
    });

    const tutor = await res.json();

    const {
        tutorName,
        photo,
        subject,
        availableDays,
        availableTime,
        hourlyFee,
        totalSlot,
        sessionDate,
        institutionExperience,
        location,
        teachingMode,
    } = tutor;

    return (
        <section className="min-h-screen bg-[#F4F4F4] py-10 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-[35px] border border-[#00B7B5]/10 shadow-sm bg-white h-full">
                        <Image
                            src={photo}
                            alt={tutorName}
                            width={650}
                            height={650}
                            className="w-full h-full min-h-[650px] object-cover"
                        />

                        {/* SUBJECT */}
                        <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-white/90 backdrop-blur-xl">
                            <span className="text-sm font-semibold text-[#005461]">
                                {subject}
                            </span>
                        </div>

                        {/* MODE */}
                        <div className="absolute top-6 right-6 px-5 py-2 rounded-full bg-gradient-to-r from-[#005461] to-[#00B7B5]">
                            <span className="text-sm font-semibold text-white">
                                {teachingMode}
                            </span>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="bg-white rounded-[35px] border border-[#00B7B5]/10 shadow-sm p-6 md:p-10 h-full flex flex-col">
                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00B7B5]/10 border border-[#00B7B5]/20 mb-6 w-fit">
                            <div className="w-2 h-2 rounded-full bg-[#00B7B5]"></div>

                            <span className="text-sm font-medium text-[#018790]">
                                Professional Tutor Profile
                            </span>
                        </div>

                        {/* NAME */}
                        <h1 className="text-4xl md:text-5xl font-bold text-[#005461] leading-tight">
                            {tutorName}
                        </h1>

                        {/* LOCATION */}
                        <p className="text-gray-500 text-lg mt-4">
                            {location}
                        </p>

                        {/* PRICE */}
                        <div className="mt-8 flex items-end gap-2">
                            <h2 className="text-5xl font-bold text-[#018790]">
                                ${hourlyFee}
                            </h2>

                            <span className="text-gray-500 mb-2">
                                / hour
                            </span>
                        </div>

                        {/* INFO GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                            <div className="bg-[#F4F4F4] rounded-3xl p-5 border border-[#00B7B5]/10">
                                <p className="text-sm text-gray-500 mb-2">
                                    Available Days
                                </p>

                                <h3 className="text-lg font-semibold text-[#005461]">
                                    {availableDays}
                                </h3>
                            </div>

                            <div className="bg-[#F4F4F4] rounded-3xl p-5 border border-[#00B7B5]/10">
                                <p className="text-sm text-gray-500 mb-2">
                                    Time Slot
                                </p>

                                <h3 className="text-lg font-semibold text-[#005461]">
                                    {availableTime}
                                </h3>
                            </div>

                            <div className="bg-[#F4F4F4] rounded-3xl p-5 border border-[#00B7B5]/10">
                                <p className="text-sm text-gray-500 mb-2">
                                    Total Slots
                                </p>

                                <h3 className="text-lg font-semibold text-[#005461]">
                                    {totalSlot} Available
                                </h3>
                            </div>

                            <div className="bg-[#F4F4F4] rounded-3xl p-5 border border-[#00B7B5]/10">
                                <p className="text-sm text-gray-500 mb-2">
                                    Session Start
                                </p>

                                <h3 className="text-lg font-semibold text-[#005461]">
                                    {sessionDate}
                                </h3>
                            </div>
                        </div>

                        {/* EXPERIENCE */}
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-[#005461] mb-2">
                                Experience
                            </h2>

                            <div className="bg-[#F4F4F4] border border-[#00B7B5]/10 rounded-3xl p-6">
                                <p className="text-gray-700 leading-8">
                                    {institutionExperience}
                                </p>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <Link href={`/book-session/${id}`} className="mt-auto pt-10">
                            <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-cyan-500/20">
                                Book Session
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TutorDetailsPage;