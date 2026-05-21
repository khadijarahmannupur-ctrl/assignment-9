"use client";

import React from "react";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const TutorCard = ({ tutor }) => {
    const {
        _id,
        tutorName,
        photo,
        subject,
        hourlyFee,
        teachingMode,
        location,
    } = tutor;

    return (
        <Card className="group p-0 bg-white dark:bg-[#111827] border border-[#00B7B5]/10 rounded-[28px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            {/* IMAGE */}
            <div className="relative overflow-hidden">
                <Image
                    src={photo}
                    alt={tutorName}
                    height={240}
                    width={400}
                    className="w-full h-[240px] object-cover object-top group-hover:scale-105 transition-all duration-700"
                />

                {/* SUBJECT */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md">
                    <span className="text-xs font-semibold text-[#005461]">
                        {subject}
                    </span>
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-7">
                {/* NAME */}
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h2 className="text-2xl font-bold text-[#005461] leading-tight">
                            {tutorName}
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            {location}
                        </p>
                    </div>

                    {/* MODE */}
                    <div className="px-3 py-1.5 rounded-xl bg-[#00B7B5]/10">
                        <span className="text-xs font-semibold text-[#018790]">
                            {teachingMode}
                        </span>
                    </div>
                </div>

                {/* PRICE */}
                <div className="mt-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">
                            Hourly Fee
                        </p>

                        <h3 className="text-3xl font-bold text-[#018790] mt-1">
                            ${hourlyFee}
                            <span className="text-sm text-gray-400 font-medium">
                                /hr
                            </span>
                        </h3>
                    </div>
                </div>

                {/* BUTTON */}
                <Link href={`/tutors/${_id}`}>
                    <Button className="w-full mt-6 h-13 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold">
                        Book Session
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default TutorCard;