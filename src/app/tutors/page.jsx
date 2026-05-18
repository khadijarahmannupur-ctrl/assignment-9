import TutorCard from "@/components/TutorCard";
import React from "react";

const TutorsPage = async () => {
    const res = await fetch("http://localhost:5000/tutors", {
        cache: "no-store",
    });

    const tutors = await res.json();

    return (
        <section className="min-h-screen bg-[#F4F4F4] py-10 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* TOP SECTION */}
                <div className="mb-12 md:mb-16">
                    {/* BADGE */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00B7B5]/10 border border-[#00B7B5]/20 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#00B7B5]"></div>

                        <span className="text-sm font-medium text-[#018790]">
                            Explore Professional Tutors
                        </span>
                    </div>

                    {/* HEADING */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#005461] leading-tight max-w-3xl">
                                Find The Perfect Tutor For Your Learning Journey
                            </h1>

                            <p className="text-gray-600 mt-5 max-w-2xl leading-7">
                                Browse experienced tutors from different subjects and
                                book personalized learning sessions based on your
                                preferred schedule and teaching style.
                            </p>
                        </div>

                        {/* STATS */}
                        <div className="flex items-center gap-4">
                            <div className="bg-white border border-[#00B7B5]/10 rounded-2xl px-6 py-4 shadow-sm">
                                <h3 className="text-2xl font-bold text-[#005461]">
                                    {tutors.length}+
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Available Tutors
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[#005461] to-[#00B7B5] rounded-2xl px-6 py-4 shadow-sm">
                                <h3 className="text-2xl font-bold text-white">
                                    24/7
                                </h3>

                                <p className="text-sm text-white/80 mt-1">
                                    Online Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEARCH & FILTER UI */}
                <div className="bg-white rounded-[28px] border border-[#00B7B5]/10 shadow-sm p-5 md:p-6 mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                        {/* SEARCH */}
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-medium text-[#005461] mb-3">
                                Search Tutor
                            </label>

                            <input
                                type="text"
                                placeholder="Search by tutor name..."
                                className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#00B7B5]"
                            />
                        </div>

                        {/* START DATE */}
                        <div>
                            <label className="block text-sm font-medium text-[#005461] mb-3">
                                Start Date
                            </label>

                            <input
                                type="date"
                                className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#00B7B5]"
                            />
                        </div>

                        {/* END DATE */}
                        <div>
                            <label className="block text-sm font-medium text-[#005461] mb-3">
                                End Date
                            </label>

                            <input
                                type="date"
                                className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#00B7B5]"
                            />
                        </div>
                    </div>
                </div>

                {/* TUTORS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {tutors.map((tutor) => (
                        <TutorCard
                            key={tutor._id}
                            tutor={tutor}
                        />
                    ))}
                </div>

                {/* EMPTY STATE */}
                {tutors.length === 0 && (
                    <div className="bg-white border border-[#00B7B5]/10 rounded-[30px] py-20 px-6 text-center shadow-sm">
                        <div className="w-20 h-20 rounded-full bg-[#00B7B5]/10 flex items-center justify-center mx-auto mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#00B7B5]"></div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#005461] mb-4">
                            No Tutors Found
                        </h2>

                        <p className="text-gray-600 max-w-md mx-auto leading-7">
                            Currently there are no tutors available matching your
                            search criteria. Please try again later.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TutorsPage;