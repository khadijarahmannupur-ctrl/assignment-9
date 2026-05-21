"use client";

import { authClient } from "@/lib/auth-client";
// import React from "react";
import { Envelope } from "@gravity-ui/icons";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    Modal,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const MyTutorEdit = ({ tutor }) => {
    const router = useRouter();

    const {
        _id,
        tutorName,
        subject,
        availableDays,
        hourlyFee,
        totalSlot,
        sessionDate,
        photo,
        location,
        availableTime,
        teachingMode,
        experience,
    } = tutor;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedTutor = Object.fromEntries(formData.entries());
        // console.log(updatedTutor);

        const {data: tokenData} = await authClient.token();
        console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addTutor/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(updatedTutor)
        })
        const data = await res.json();
        
        if (data.modifiedCount > 0) {
            router.refresh();
            toast.success('Tutor Information Updated Successfully')
        }
        // console.log(data);
    };

    return (
        <Modal>
            {/* OPEN BUTTON */}
            <Modal.Trigger>
                <Button
                    size="sm"
                    variant="bordered"
                    className="w-full border-[#00B7B5]/20 text-[#005461] font-medium hover:bg-[#00B7B5]/10"
                >
                    Update
                </Button>
            </Modal.Trigger>

            {/* MODAL */}
            <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-5xl rounded-[35px] overflow-hidden bg-[#F4F4F4] border border-[#00B7B5]/10 shadow-2xl">

                        <Modal.CloseTrigger />

                        {/* HEADER */}
                        <Modal.Header className="px-6 md:px-10 py-6 bg-white border-b border-[#00B7B5]/10">

                            <div className="flex items-start gap-5">

                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#005461] to-[#00B7B5] flex items-center justify-center text-white shadow-lg">
                                    <Envelope className="size-6" />
                                </div>

                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B7B5]/10 border border-[#00B7B5]/20 mb-4">

                                        <div className="w-2 h-2 rounded-full bg-[#00B7B5]"></div>

                                        <span className="text-sm font-medium text-[#018790]">
                                            Update Tutor Information
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="p-4 md:p-8 max-h-[80vh] overflow-y-auto">

                            <Surface
                                variant="default"
                                className="rounded-[30px] border border-[#00B7B5]/10 bg-white p-5 md:p-8 shadow-sm"
                            >

                                <Form
                                    onSubmit={onSubmit}
                                    className="w-full flex flex-col gap-8"
                                >

                                    {/* GRID */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                                        {/* TUTOR NAME */}
                                        <TextField
                                            defaultValue={tutorName}
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
                                            defaultValue={photo}
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
                                                defaultValue={subject}
                                                className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#00B7B5]"
                                            >
                                                <option value="">
                                                    Select Subject
                                                </option>

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
                                                defaultValue={teachingMode}
                                                className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#00B7B5]"
                                            >
                                                <option value="">
                                                    Select Mode
                                                </option>

                                                <option>Online</option>
                                                <option>Offline</option>
                                                <option>Both</option>
                                            </select>
                                        </div>

                                        {/* AVAILABLE DAYS */}
                                        <TextField
                                            defaultValue={availableDays}
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
                                            defaultValue={availableTime}
                                            isRequired
                                            name="availableTime"
                                            className="w-full"
                                        >
                                            <Label className="mb-3 font-semibold text-[#005461]">
                                                Available Time Slot
                                            </Label>

                                            <Input
                                                placeholder="Example: 5 PM - 8 PM"
                                                size="lg"
                                                radius="lg"
                                                className="w-full"
                                            />

                                            <FieldError />
                                        </TextField>

                                        {/* HOURLY FEE */}
                                        <TextField
                                            defaultValue={hourlyFee}
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
                                            defaultValue={totalSlot}
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
                                            defaultValue={sessionDate}
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
                                            defaultValue={location}
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
                                            defaultValue={experience}
                                            placeholder="Write institution name and teaching experience..."
                                            radius="lg"
                                            className="w-full"
                                        />

                                        <Description className="mt-2 text-sm text-gray-500">
                                            Add your teaching background and institution details.
                                        </Description>
                                    </div>

                                    <Modal.Footer>
                                        {/* BUTTONS */}
                                        <div className="flex flex-col md:flex-row gap-4 w-full">

                                            <Button
                                                slot="close"
                                                variant="secondary"
                                                className="w-full md:w-40 h-14 rounded-2xl text-[#005461]"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                slot="close"
                                                type="submit"
                                                className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-cyan-500/20"
                                            >
                                                Update Tutor
                                            </Button>
                                        </div>
                                    </Modal.Footer>
                                </Form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default MyTutorEdit;