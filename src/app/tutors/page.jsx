"use client";

import TutorCard from "@/components/TutorCard";
import React, { useEffect, useState } from "react";

const TutorsPage = () => {
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchTutors = async () => {
        try {
            setLoading(true);

            const res = await fetch(
                `http://localhost:5000/tutors?search=${search}&startDate=${startDate}&endDate=${endDate}`,
                { cache: "no-store" }
            );

            const data = await res.json();
            setTutors(data);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // debounce search + filter
    useEffect(() => {
        const delay = setTimeout(() => {
            fetchTutors();
        }, 400);

        return () => clearTimeout(delay);
    }, [search, startDate, endDate]);

    // first load
    useEffect(() => {
        fetchTutors();
    }, []);

    return (
        <section className="min-h-screen bg-[#F4F4F4] py-10 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* SEARCH + FILTER UI */}
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
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
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
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
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
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#00B7B5]"
                            />
                        </div>

                    </div>
                </div>

                {/* LOADING */}
                {loading && (
                    <p className="text-center text-gray-500">
                        Loading...
                    </p>
                )}

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {tutors.map((tutor) => (
                        <TutorCard key={tutor._id} tutor={tutor} />
                    ))}
                </div>

                {/* EMPTY */}
                {!loading && tutors.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">
                        No tutors found
                    </p>
                )}

            </div>
        </section>
    );
};

export default TutorsPage;