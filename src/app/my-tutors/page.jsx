import MyTutorsCard from "@/components/MyTutorsCard";
import React from "react";
import { Table } from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "My Tutors | MediQueue",
};

const MyTutorsPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addTutor`, {
        headers: {
            authorization: `Bearer ${token}`
        },
        cache: "no-store",
    });

    const tutors = await res.json();

    return (
        <section className="min-h-screen bg-[#F4F4F4] py-10 md:py-16 px-3 md:px-4">
            <div className="max-w-7xl mx-auto">
                {/* TOP SECTION */}
                <div className="mb-10 md:mb-12">
                    {/* BADGE */}
                    <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-[#00B7B5]/10 border border-[#00B7B5]/20 mb-5 md:mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#00B7B5]"></div>

                        <span className="text-xs md:text-sm font-medium text-[#018790]">
                            Personal Tutor Dashboard
                        </span>
                    </div>

                    {/* HEADING */}
                    <h1 className="text-3xl md:text-5xl font-bold text-[#005461] leading-tight">
                        My Tutors
                    </h1>

                    <p className="text-sm md:text-base text-gray-600 mt-4 max-w-2xl leading-7">
                        Manage all your created tutor sessions from one place.
                        Update tutor information, monitor availability, and
                        organize your teaching activities efficiently.
                    </p>
                </div>

                {/* MOBILE CARD VIEW */}
                <div className="grid grid-cols-1 gap-5 lg:hidden">
                    {tutors.map((tutor, index) => (
                        <div
                            key={tutor._id}
                            className="bg-white rounded-[28px] border border-[#00B7B5]/10 shadow-sm p-5"
                        >
                            {/* TOP */}
                            <div className="flex items-start justify-between gap-4 mb-5">
                                <div>
                                    <h2 className="text-xl font-bold text-[#005461]">
                                        {tutor.tutorName}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {tutor.subject}
                                    </p>
                                </div>

                                <div className="px-3 py-1 rounded-full bg-[#00B7B5]/10 text-[#005461] text-xs font-medium">
                                    {tutor.totalSlot} Slots
                                </div>
                            </div>

                            {/* INFO */}
                            <div className="space-y-4">
                                <div className="flex justify-between gap-4">
                                    <span className="text-gray-500 text-sm">
                                        Available
                                    </span>

                                    <span className="text-[#005461] font-medium text-sm text-right">
                                        {tutor.availableDays}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <span className="text-gray-500 text-sm">
                                        Fee
                                    </span>

                                    <span className="text-[#018790] font-semibold text-sm">
                                        ${tutor.hourlyFee}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <span className="text-gray-500 text-sm">
                                        Session Date
                                    </span>

                                    <span className="text-[#005461] font-medium text-sm text-right">
                                        {tutor.sessionDate}
                                    </span>
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 h-11 rounded-xl border border-[#00B7B5]/20 text-[#005461] font-medium text-sm">
                                    Update
                                </button>

                                <button className="flex-1 h-11 rounded-xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-medium text-sm">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DESKTOP TABLE */}
                <div className="hidden lg:block bg-white rounded-[30px] border border-[#00B7B5]/10 shadow-sm overflow-hidden">
                    <Table>
                        <Table.ScrollContainer>
                            <Table.Content
                                aria-label="My Tutors Table"
                                className="min-w-[1100px]"
                            >
                                {/* HEADER */}
                                <Table.Header className="bg-gradient-to-r from-[#005461] to-[#00B7B5]">
                                    <Table.Column className="text-white text-xl">#</Table.Column>
                                    <Table.Column className="text-white text-xl">Name</Table.Column>
                                    <Table.Column className="text-white text-xl">Subject</Table.Column>
                                    <Table.Column className="text-white text-xl">Available Days</Table.Column>
                                    <Table.Column className="text-white text-xl">Hourly Fee</Table.Column>
                                    <Table.Column className="text-white text-xl">Total Slot</Table.Column>
                                    <Table.Column className="text-white text-xl">Session Date</Table.Column>
                                    <Table.Column className="text-white text-xl">Action</Table.Column>
                                </Table.Header>

                                {/* BODY */}
                                <Table.Body>
                                    {tutors.map((tutor, index) => (
                                        <MyTutorsCard
                                            key={tutor._id}
                                            tutor={tutor}
                                            index={index}
                                        />
                                    ))}
                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default MyTutorsPage;