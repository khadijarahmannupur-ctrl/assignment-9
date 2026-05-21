import React from "react";
import Link from "next/link";
import TutorCard from "./TutorCard";

const HomepageTutorsCard = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/feature`, {
        cache: "no-store",
    });

    const tutors = await res.json();

    return (
        <section className="py-16 md:py-24 px-4 bg-[#F4F4F4]">
            <div className="max-w-7xl mx-auto">
                {/* TOP SECTION */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
                    {/* LEFT */}
                    <div>
                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00B7B5]/10 border border-[#00B7B5]/20 mb-6">
                            <div className="w-2 h-2 rounded-full bg-[#00B7B5]"></div>

                            <span className="text-sm font-medium text-[#018790]">
                                Featured Professional Tutors
                            </span>
                        </div>

                        {/* HEADING */}
                        <h1 className="text-3xl md:text-5xl font-bold text-[#005461] leading-tight max-w-3xl">
                            Learn From Skilled Tutors Anytime Anywhere
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 mt-5 max-w-2xl leading-7">
                            Explore experienced tutors from multiple subjects and
                            book personalized learning sessions based on your
                            schedule, goals, and preferred teaching style.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">

                        {/* BUTTON */}
                        <Link href="/tutors">
                            <button className="h-14 px-7 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300">
                                View All Tutors
                            </button>
                        </Link>
                    </div>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {tutors.map((tutor) => (
                        <TutorCard
                            key={tutor._id}
                            tutor={tutor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomepageTutorsCard;