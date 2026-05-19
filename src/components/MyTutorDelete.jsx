"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function MyTutorDelete({ tutor }) {
    const { _id } = tutor;
    const router = useRouter();
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/addTutor/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
        const data = await res.json();
        if (data.deletedCount > 0) {
            router.refresh();
        }
        console.log(data)
    }
    return (
        <AlertDialog>
            {/* OPEN BUTTON */}
            <Button
                size="sm"
                className="bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-medium"
            >
                Delete
            </Button>

            {/* DIALOG */}
            <AlertDialog.Backdrop className="bg-black/40 backdrop-blur-sm">
                <AlertDialog.Container>

                    <AlertDialog.Dialog className="sm:max-w-[420px] rounded-[30px] border border-red-100 bg-white shadow-2xl overflow-hidden">

                        <AlertDialog.CloseTrigger />

                        {/* HEADER */}
                        <AlertDialog.Header className="pb-2">

                            <AlertDialog.Icon status="danger" />

                            <AlertDialog.Heading className="text-2xl font-bold text-[#005461]">
                                Delete Tutor?
                            </AlertDialog.Heading>

                        </AlertDialog.Header>

                        {/* BODY */}
                        <AlertDialog.Body>

                            <p className="text-gray-600 leading-7">
                                This tutor session will be permanently deleted.
                                You cannot undo this action later.
                            </p>

                        </AlertDialog.Body>

                        {/* FOOTER */}
                        <AlertDialog.Footer className="pt-2">

                            <Button
                                slot="close"
                                variant="secondary"
                                className="rounded-xl text-[#005461]"
                            >
                                Cancel
                            </Button>

                            <Button
                                onClick={handleDelete}
                                slot="close"
                                className="rounded-xl bg-red-500 hover:bg-red-600 text-white"
                            >
                                Delete
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}