"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const BookingCancelled = ({ booking }) => {
    const router = useRouter();

    const [status, setStatus] = useState(booking.bookStatus);

    const handleCancelBooking = async () => {
    
        const {data: tokenData} = await authClient.token();
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${booking._id}`,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${tokenData?.token}`
                },
            }
        );

        const data = await res.json();

        if (data.modifiedCount > 0) {

            setStatus("cancelled");

            toast.success("Booking Cancelled Successfully");
            router.refresh();
        }
    };

    return (
        <AlertDialog>

            <Button
                disabled={status === "cancelled"}
                className={`px-5 h-10 rounded-xl text-sm font-medium transition-all duration-300 ${status === "cancelled"
                        ? "bg-gray-300 text-white cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600 text-white"
                    }`}
            >
                {
                    status === "cancelled"
                        ? "Cancelled"
                        : "Cancel"
                }
            </Button>

            <AlertDialog.Backdrop>

                <AlertDialog.Container>

                    <AlertDialog.Dialog className="sm:max-w-[400px]">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>

                            <AlertDialog.Icon status="danger" />

                            <AlertDialog.Heading>
                                Cancel Booking?
                            </AlertDialog.Heading>

                        </AlertDialog.Header>

                        <AlertDialog.Body>

                            <p className="text-gray-600">
                                Are you sure you want to cancel this booked session?
                            </p>

                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="secondary"
                            >
                                No
                            </Button>

                            <Button
                                slot="close"
                                onPress={handleCancelBooking}
                                className="bg-red-500 text-white"
                            >
                                Yes, Cancel
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>

            </AlertDialog.Backdrop>

        </AlertDialog>
    );
};

export default BookingCancelled;