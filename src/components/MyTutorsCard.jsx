"use client";

import React from "react";
import { Button, Table } from "@heroui/react";
import MyTutorEdit from "./MyTutorEdit";
import { MyTutorDelete } from "./MyTutorDelete";

const MyTutorsCard = ({ tutor, index }) => {
    const {
        tutorName,
        subject,
        availableDays,
        hourlyFee,
        totalSlot,
        sessionDate,
    } = tutor;

    return (
        <Table.Row className="hover:bg-[#00B7B5]/5 transition-all duration-300">
            {/* SERIAL */}
            <Table.Cell>
                <span className="font-semibold text-[#005461]">
                    {index + 1}
                </span>
            </Table.Cell>

            {/* NAME */}
            <Table.Cell>
                <span className="font-semibold text-[#005461]">
                    {tutorName}
                </span>
            </Table.Cell>

            {/* SUBJECT */}
            <Table.Cell>
                <span className="text-gray-600">
                    {subject}
                </span>
            </Table.Cell>

            {/* AVAILABLE */}
            <Table.Cell>
                <span className="text-gray-600">
                    {availableDays}
                </span>
            </Table.Cell>

            {/* FEE */}
            <Table.Cell>
                <span className="font-semibold text-[#018790]">
                    ${hourlyFee}
                </span>
            </Table.Cell>

            {/* SLOT */}
            <Table.Cell>
                <span className="px-4 py-2 rounded-full bg-[#00B7B5]/10 text-[#005461] text-sm font-medium">
                    {totalSlot}
                </span>
            </Table.Cell>

            {/* DATE */}
            <Table.Cell>
                <span className="text-gray-600 whitespace-nowrap">
                    {sessionDate}
                </span>
            </Table.Cell>

            {/* ACTION */}
            <Table.Cell className="overflow-visible">
                <div className="flex items-center gap-3">
                    <MyTutorEdit tutor={tutor}></MyTutorEdit>
                    <MyTutorDelete tutor={tutor}></MyTutorDelete>
                </div>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyTutorsCard;