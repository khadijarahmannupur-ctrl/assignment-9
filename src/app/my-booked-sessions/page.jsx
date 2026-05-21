import BookingCancelled from "@/components/BookingCancelled";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "My Booked Sessions | MediQueue",
};

const MyBookedSessions = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            },
            cache: "no-store",
        }
    );

    const bookings = await res.json();

    return (
        <section className="min-h-screen bg-[#F4F4F4] py-10 px-4 md:px-8">

            <div className="max-w-7xl mx-auto">

                {/* TOP */}
                <div className="mb-8">

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00B7B5]/10 border border-[#00B7B5]/20 mb-5">

                        <div className="w-2 h-2 rounded-full bg-[#00B7B5]"></div>

                        <span className="text-sm font-medium text-[#018790]">
                            My Booked Sessions
                        </span>

                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#005461]">
                        Booked Tutor Sessions
                    </h1>

                    <p className="text-gray-500 mt-4 text-lg">
                        Manage all your booked tutor sessions easily.
                    </p>

                </div>

                {/* EMPTY */}
                {
                    bookings.length === 0 ? (

                        <div className="rounded-[35px] border border-[#00B7B5]/10 bg-white dark:bg-[#111827] shadow-xl">

                            <div className="py-24 px-6 flex flex-col items-center justify-center text-center">

                                <div className="w-24 h-24 rounded-full bg-[#00B7B5]/10 flex items-center justify-center mb-6">

                                    <span className="text-4xl">
                                        📚
                                    </span>

                                </div>

                                <h2 className="text-3xl font-bold text-[#005461] mb-4">
                                    No Bookings Found
                                </h2>

                                <p className="text-gray-500 max-w-md leading-8">
                                    You have not booked any tutor sessions yet.
                                    Explore tutors and start learning today.
                                </p>

                            </div>

                        </div>

                    ) : (

                        <div className="rounded-[35px] overflow-hidden border border-[#00B7B5]/10 bg-white dark:bg-[#111827] shadow-xl">

                            <div className="overflow-x-auto">

                                <table className="w-full min-w-[800px]">

                                    {/* TABLE HEAD */}
                                    <thead className="bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white">

                                        <tr>

                                            <th className="px-6 py-5 text-left font-semibold">
                                                Tutor Name
                                            </th>

                                            <th className="px-6 py-5 text-left font-semibold">
                                                Student Name
                                            </th>

                                            <th className="px-6 py-5 text-left font-semibold">
                                                Email
                                            </th>

                                            <th className="px-6 py-5 text-left font-semibold">
                                                Status
                                            </th>

                                            <th className="px-6 py-5 text-left font-semibold">
                                                Action
                                            </th>

                                        </tr>

                                    </thead>

                                    {/* TABLE BODY */}
                                    <tbody>

                                        {
                                            bookings.map((booking) => (

                                                <tr
                                                    key={booking._id}
                                                    className="border-b border-[#00B7B5]/10 hover:bg-[#00B7B5]/5 transition-all duration-300"
                                                >

                                                    {/* TUTOR NAME */}
                                                    <td className="px-6 py-5">

                                                        <span className="font-semibold text-[#005461]">
                                                            {booking.tutorName}
                                                        </span>

                                                    </td>

                                                    {/* STUDENT NAME */}
                                                    <td className="px-6 py-5">

                                                        <span className="text-gray-600">
                                                            {booking.studentName}
                                                        </span>

                                                    </td>

                                                    {/* EMAIL */}
                                                    <td className="px-6 py-5">

                                                        <span className="text-gray-600 break-all">
                                                            {booking.studentEmail}
                                                        </span>

                                                    </td>

                                                    {/* STATUS */}
                                                    <td className="px-6 py-5">

                                                        {
                                                            booking.bookStatus === "cancelled" ? (

                                                                <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 text-sm font-medium">
                                                                    Cancelled
                                                                </span>

                                                            ) : (

                                                                <span className="px-4 py-2 rounded-full bg-[#00B7B5]/10 text-[#005461] text-sm font-medium">
                                                                    Booked
                                                                </span>

                                                            )
                                                        }

                                                    </td>

                                                    {/* ACTION */}
                                                    <td className="px-6 py-5">

                                                        <BookingCancelled booking={booking}></BookingCancelled>

                                                    </td>

                                                </tr>

                                            ))
                                        }

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    )
                }

            </div>

        </section>
    );
};

export default MyBookedSessions;