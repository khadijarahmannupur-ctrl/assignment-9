import React from "react";

const WhyChooseSection = () => {
    const features = [
        {
            title: "Verified Professional Tutors",
            description:
                "Learn from experienced and verified tutors specialized in different academic subjects.",
        },
        {
            title: "Flexible Learning Schedule",
            description:
                "Book sessions based on your preferred time and availability without conflicts.",
        },
        {
            title: "Online & Offline Support",
            description:
                "Choose between online, offline, or hybrid learning modes according to your comfort.",
        },
        {
            title: "Smart Booking System",
            description:
                "Enjoy smooth session booking with automatic slot management and instant confirmation.",
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* TOP */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    {/* BADGE */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00B7B5]/10 border border-[#00B7B5]/20 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#00B7B5]"></div>

                        <span className="text-sm font-medium text-[#018790]">
                            Why Students Choose MediQueue
                        </span>
                    </div>

                    {/* HEADING */}
                    <h1 className="text-3xl md:text-5xl font-bold text-[#005461] leading-tight">
                        A Smarter Way To Book Learning Sessions
                    </h1>

                    {/* DESC */}
                    <p className="text-gray-600 mt-5 leading-7">
                        MediQueue simplifies the tutor booking experience with
                        organized scheduling, verified tutors, and flexible
                        learning options for students.
                    </p>
                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-[#F4F4F4] dark:bg-[#111827] border border-[#00B7B5]/10 rounded-[28px] p-7 hover:bg-white hover:dark:bg-[#111827] hover:shadow-xl transition-all duration-500"
                        >
                            {/* NUMBER */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] flex items-center justify-center text-white font-bold text-xl">
                                0{index + 1}
                            </div>

                            {/* TITLE */}
                            <h2 className="text-2xl font-bold text-[#005461] mt-7 leading-tight">
                                {feature.title}
                            </h2>

                            {/* DESC */}
                            <p className="text-gray-600 mt-4 leading-7">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;