"use client";

import React from "react";

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BookingModal = ({ tutor }) => {

    const router = useRouter();

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const {
        _id,
        tutorName,
    } = tutor;

    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const bookingData = Object.fromEntries(formData.entries());
        bookingData.studentId = user?.id;
        console.log(bookingData);

        const {data: tokenData} = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json();

        if (data?.insertedId) {

            toast.success("Session Booked Successfully");

            router.push("/my-booked-sessions");

            router.refresh();
        }
        else {
            toast.error(data?.message);
        }

        console.log(data);
    };

    return (
        <Modal>

            {/* OPEN BUTTON */}
            <Modal.Trigger>

                <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-cyan-500/20">
                    Book Session
                </button>

            </Modal.Trigger>

            {/* MODAL */}
            <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">

                <Modal.Container placement="center">

                    <Modal.Dialog className="w-full max-w-2xl rounded-[35px] overflow-hidden bg-[#F4F4F4] border border-[#00B7B5]/10 shadow-2xl">

                        <Modal.CloseTrigger />

                        {/* HEADER */}
                        <Modal.Header className="px-6 md:px-10 py-6 bg-white border-b border-[#00B7B5]/10">

                            <div>

                                <h1 className="text-3xl font-bold text-[#005461]">
                                    Book Tutor Session
                                </h1>

                                <p className="text-gray-500 mt-3">
                                    Complete your booking information below.
                                </p>

                            </div>

                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="p-4 md:p-8">

                            <Surface
                                variant="default"
                                className="rounded-[30px] border border-[#00B7B5]/10 bg-white p-5 md:p-8 shadow-sm"
                            >

                                <Form
                                    onSubmit={onSubmit}
                                    className="w-full flex flex-col gap-6"
                                >

                                    {/* STUDENT NAME */}
                                    <TextField
                                        isRequired
                                        name="studentName"
                                        defaultValue={user?.name}
                                        className="w-full"
                                    >

                                        <Label className="mb-3 font-semibold text-[#005461]">
                                            Student Name
                                        </Label>

                                        <Input
                                            readOnly
                                            size="lg"
                                            radius="lg"
                                            className="w-full"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* PHONE */}
                                    <TextField
                                        isRequired
                                        name="phone"
                                        className="w-full"
                                    >

                                        <Label className="mb-3 font-semibold text-[#005461]">
                                            Phone Number
                                        </Label>

                                        <Input
                                            placeholder="Enter your phone number"
                                            size="lg"
                                            radius="lg"
                                            className="w-full"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* TUTOR ID */}
                                    <TextField
                                        isRequired
                                        name="tutorId"
                                        defaultValue={_id}
                                        className="w-full"
                                    >

                                        <Label className="mb-3 font-semibold text-[#005461]">
                                            Tutor ID
                                        </Label>

                                        <Input
                                            readOnly
                                            size="lg"
                                            radius="lg"
                                            className="w-full"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* TUTOR NAME */}
                                    <TextField
                                        isRequired
                                        name="tutorName"
                                        defaultValue={tutorName}
                                        className="w-full"
                                    >

                                        <Label className="mb-3 font-semibold text-[#005461]">
                                            Tutor Name
                                        </Label>

                                        <Input
                                            readOnly
                                            size="lg"
                                            radius="lg"
                                            className="w-full"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* STUDENT EMAIL */}
                                    <TextField
                                        isRequired
                                        name="studentEmail"
                                        defaultValue={user?.email}
                                        className="w-full"
                                    >

                                        <Label className="mb-3 font-semibold text-[#005461]">
                                            Student Email
                                        </Label>

                                        <Input
                                            readOnly
                                            size="lg"
                                            radius="lg"
                                            className="w-full"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* BOOK STATUS */}
                                    <input
                                        type="hidden"
                                        name="bookStatus"
                                        value="Booked"
                                    />

                                    {/* BUTTONS */}
                                    <div className="flex flex-col md:flex-row gap-4 w-full pt-2">

                                        <Button
                                            slot="close"
                                            variant="secondary"
                                            className="w-full md:w-40 h-14 rounded-2xl text-[#005461]"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            slot='close'
                                            type="submit"
                                            className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-cyan-500/20"
                                        >
                                            Confirm Booking
                                        </Button>

                                    </div>

                                </Form>

                            </Surface>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
};

export default BookingModal;