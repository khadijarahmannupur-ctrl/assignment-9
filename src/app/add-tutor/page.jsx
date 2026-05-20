"use client";

import React from "react";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const AddTutorPage = () => {
    const onSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const tutor = Object.fromEntries(formData.entries());

        const {data: tokenData} = await authClient.token();
        console.log(tokenData)
        const res = await fetch('http://localhost:5000/addTutor', {
            method: "POST",
            headers: {
                'content-type' : 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(tutor)
        })
        const data = await res.json();
        if(data){
            toast.success("Tutor Added Successfully")
        }
        console.log(data);
    };

    return (
        <section className="min-h-screen bg-[#F4F4F4] py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* HEADING */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#005461] mb-4">
                        Add New Tutor
                    </h1>

                    <p className="text-gray-600 max-w-2xl mx-auto leading-7">
                        Create a tutor profile by filling in the required
                        information below. Students will be able to view and book
                        your sessions.
                    </p>
                </div>

                {/* FORM CARD */}
                <div className="bg-white rounded-[30px] shadow-xl border border-[#00B7B5]/10 p-6 md:p-10">
                    <Form
                        onSubmit={onSubmit}
                        className="w-full flex flex-col gap-8"
                    >
                        {/* GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {/* TUTOR NAME */}
                            <TextField
                                isRequired
                                name="tutorName"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Tutor Name
                                </Label>

                                <Input
                                    placeholder="Enter tutor name"
                                    size="lg"
                                    radius="lg"
                                    className="w-full"
                                />

                                <FieldError />
                            </TextField>

                            {/* PHOTO URL */}
                            <TextField
                                isRequired
                                name="photo"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Photo URL
                                </Label>

                                <Input
                                    placeholder="Enter photo url"
                                    size="lg"
                                    radius="lg"
                                    className="w-full"
                                />

                                <FieldError />
                            </TextField>

                            {/* SUBJECT */}
                            <div className="w-full">
                                <label className="block mb-3 font-semibold text-[#005461]">
                                    Subject / Category
                                </label>

                                <select
                                    name="subject"
                                    className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus:outline-none  focus:border-[#00B7B5]"
                                >
                                    <option value="">Select Subject</option>

                                    <option>Mathematics</option>
                                    <option>Physics</option>
                                    <option>Chemistry</option>
                                    <option>English</option>
                                    <option>Biology</option>
                                    <option>ICT</option>
                                </select>
                            </div>

                            {/* TEACHING MODE */}
                            <div className="w-full">
                                <label className="block mb-3 font-semibold text-[#005461]">
                                    Teaching Mode
                                </label>

                                <select
                                    name="teachingMode"
                                    className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#00B7B5]"
                                >
                                    <option value="">Select Mode</option>

                                    <option>Online</option>
                                    <option>Offline</option>
                                    <option>Both</option>
                                </select>
                            </div>

                            {/* AVAILABLE DAYS */}
                            <TextField
                                isRequired
                                name="availableDays"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Available Days
                                </Label>

                                <Input
                                    placeholder="Example: Sun - Thu"
                                    size="lg"
                                    radius="lg"
                                    className="w-full"
                                />

                                <FieldError />
                            </TextField>

                            {/* AVAILABLE TIME */}
                            <TextField
                                isRequired
                                name="availableTime"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Available Time Slot
                                </Label>

                                <Input
                                    placeholder="Example: 5:00 PM - 8:00 PM"
                                    size="lg"
                                    radius="lg"
                                    className="w-full"
                                />

                                <FieldError />
                            </TextField>

                            {/* HOURLY FEE */}
                            <TextField
                                isRequired
                                name="hourlyFee"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Hourly Fee
                                </Label>

                                <Input
                                    type="number"
                                    placeholder="Enter hourly fee"
                                    size="lg"
                                    radius="lg"
                                    className="w-full"
                                />

                                <FieldError />
                            </TextField>

                            {/* TOTAL SLOT */}
                            <TextField
                                isRequired
                                name="totalSlot"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Total Slot
                                </Label>

                                <Input
                                    type="number"
                                    placeholder="Enter total slot"
                                    size="lg"
                                    radius="lg"
                                    className="w-full"
                                />

                                <FieldError />
                            </TextField>

                            {/* SESSION DATE */}
                            <TextField
                                isRequired
                                name="sessionDate"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Session Start Date
                                </Label>

                                <Input
                                    type="date"
                                    size="lg"
                                    radius="lg"
                                    className="w-full"
                                />

                                <FieldError />
                            </TextField>

                            {/* LOCATION */}
                            <TextField
                                isRequired
                                name="location"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Location
                                </Label>

                                <Input
                                    placeholder="Enter city / area"
                                    size="lg"
                                    radius="lg"
                                    className="w-full"
                                />

                                <FieldError />
                            </TextField>
                        </div>

                        {/* TEXTAREA */}
                        <div className="w-full">
                            <label className="block mb-3 font-semibold text-[#005461]">
                                Institution & Experience
                            </label>

                            <TextArea
                                name="experience"
                                rows={5}
                                placeholder="Write institution name and teaching experience..."
                                radius="lg"
                                className="w-full"
                            />

                            <Description className="mt-2 text-sm text-gray-500">
                                Add your teaching background and institution details.
                            </Description>
                        </div>

                        {/* BUTTON */}
                        <Button
                            type="submit"
                            className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-cyan-500/20"
                        >
                            Add Tutor
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default AddTutorPage;