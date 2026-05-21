"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
    Button,
    Card,
    Divider,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {

    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4]">
                <div className="w-16 h-16 border-4 border-[#00B7B5]/20 border-t-[#00B7B5] rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");
    };

    return (
        <section className="min-h-screen bg-[#F4F4F4] dark:bg-[#111827] py-10 px-4 md:px-8">

            <div className="max-w-6xl mx-auto">

                {/* HERO */}
                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#005461] via-[#018790] to-[#00B7B5] p-8 md:p-14 shadow-2xl border border-white/10">

                    {/* BLUR */}
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">

                        {/* IMAGE */}
                        <div className="relative">

                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-white dark:bg-[#111827]">

                                <Image
                                    src={
                                        user?.image ||
                                        "https://i.ibb.co.com/Cpf30d3Y/6997662.png"
                                    }
                                    alt="profile"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-green-400 border-4 border-white"></div>

                        </div>

                        {/* INFO */}
                        <div className="flex-1 text-center lg:text-left">

                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-xl">

                                <div className="w-2 h-2 rounded-full bg-white"></div>

                                <span className="text-sm font-medium text-white">
                                    MediQueue Profile
                                </span>

                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                {user?.name}
                            </h1>

                            <p className="text-white/80 mt-5 text-lg break-all">
                                {user?.email}
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">

                                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-white backdrop-blur-xl">
                                    Student Account
                                </div>

                                {
                                    user?.emailVerified ? (
                                        <div className="px-5 py-3 rounded-2xl bg-green-500/20 border border-green-300/20 text-white">
                                            Verified Account
                                        </div>
                                    ) : (
                                        <div className="px-5 py-3 rounded-2xl bg-yellow-500/20 border border-yellow-300/20 text-white">
                                            Email Not Verified
                                        </div>
                                    )
                                }

                            </div>

                        </div>

                    </div>

                </div>

                {/* DETAILS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

                    {/* LEFT */}
                    <Card className="lg:col-span-2 rounded-[35px] border border-[#00B7B5]/10 bg-white dark:bg-[#111827] shadow-lg p-8 md:p-10">

                        <div>

                            <h2 className="text-3xl font-bold text-[#005461]">
                                Personal Information
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Your account and personal details.
                            </p>

                        </div>

                        {/* <Divider className="my-8 bg-[#00B7B5]/10" /> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* NAME */}
                            <div className="rounded-3xl border border-[#00B7B5]/10 bg-[#F4F4F4] p-6">

                                <p className="text-sm text-gray-500 mb-2">
                                    Full Name
                                </p>

                                <h3 className="text-xl font-bold text-[#005461] break-words">
                                    {user?.name}
                                </h3>

                            </div>

                            {/* EMAIL */}
                            <div className="rounded-3xl border border-[#00B7B5]/10 bg-[#F4F4F4] p-6">

                                <p className="text-sm text-gray-500 mb-2">
                                    Email Address
                                </p>

                                <h3 className="text-xl font-bold text-[#005461] break-all">
                                    {user?.email}
                                </h3>

                            </div>

                            {/* ID */}
                            <div className="rounded-3xl border border-[#00B7B5]/10 bg-[#F4F4F4] p-6">

                                <p className="text-sm text-gray-500 mb-2">
                                    User ID
                                </p>

                                <h3 className="text-sm md:text-base font-semibold text-[#005461] break-all">
                                    {user?.id}
                                </h3>

                            </div>

                            {/* STATUS */}
                            <div className="rounded-3xl border border-[#00B7B5]/10 bg-[#F4F4F4] p-6">

                                <p className="text-sm text-gray-500 mb-2">
                                    Account Status
                                </p>

                                <h3 className="text-xl font-bold text-[#005461]">
                                    {user?.emailVerified
                                        ? "Verified"
                                        : "Not Verified"}
                                </h3>

                            </div>

                        </div>

                    </Card>

                    {/* RIGHT */}
                    <Card className="rounded-[35px] border border-[#00B7B5]/10 bg-white dark:bg-[#111827] shadow-lg p-8 h-fit">

                        <h2 className="text-2xl font-bold text-[#005461] mb-2">
                            Account Actions
                        </h2>

                        <p className="text-gray-500 mb-8 leading-7">
                            Manage your MediQueue account settings and session.
                        </p>

                        <div className="space-y-4">

                            <Button
                                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-cyan-500/20"
                            >
                                Edit Profile
                            </Button>

                            <Button
                                onPress={handleLogout}
                                className="w-full h-14 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold text-lg transition-all duration-300"
                            >
                                Logout
                            </Button>

                        </div>

                    </Card>

                </div>

            </div>

        </section>
    );
};

export default ProfilePage;