import React from "react";

const LearningStatsSection = () => {
    const stats = [
        {
            number: "500+",
            title: "Active Students",
        },
        {
            number: "120+",
            title: "Professional Tutors",
        },
        {
            number: "1K+",
            title: "Booked Sessions",
        },
        {
            number: "98%",
            title: "Student Satisfaction",
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 bg-[#F4F4F4] dark:bg-[#111827]">
            <div className="max-w-7xl mx-auto">
                {/* WRAPPER */}
                <div className="bg-gradient-to-r from-[#005461] to-[#00B7B5] rounded-[40px] p-8 md:p-14 overflow-hidden relative">
                    {/* BG BLUR */}
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

                    {/* TOP */}
                    <div className="relative z-10 text-center max-w-3xl mx-auto mb-14">
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Trusted By Students Across Bangladesh
                        </h1>

                        <p className="text-white/80 mt-5 leading-7">
                            Thousands of students use MediQueue to connect with
                            expert tutors and improve their academic performance
                            through organized learning sessions.
                        </p>
                    </div>

                    {/* STATS */}
                    <div className="relative z-10 grid grid-cols-2 xl:grid-cols-4 gap-6">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] p-7 text-center"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-white">
                                    {item.number}
                                </h2>

                                <p className="text-white/80 mt-4">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningStatsSection;