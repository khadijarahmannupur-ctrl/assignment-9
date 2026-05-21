"use client";

import React from "react";
import Link from "next/link";
import {
    Button,
    Form,
    Input,
    Label,
    TextField,
    FieldError,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const LoginPage = () => {

    const router = useRouter();

    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });

        if (data) {
            toast.success("Login Successfully")
            router.push("/");
        }

        if (error) {
            toast.error(error.message);
        }
    };

    const handleSigninWithGoogle = async () => {

        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <section className="min-h-screen bg-[#F4F4F4] flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden border border-[#00B7B5]/10 shadow-xl">

                {/* LEFT SIDE */}
                <div className="relative hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#005461] via-[#018790] to-[#00B7B5] overflow-hidden">

                    {/* BLUR */}
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

                    {/* LOGO */}
                    <div className="relative z-10">

                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white text-2xl font-bold">
                            M
                        </div>

                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10">

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 mb-6">

                            <div className="w-2 h-2 rounded-full bg-white"></div>

                            <span className="text-sm font-medium text-white">
                                Welcome Back
                            </span>

                        </div>

                        <h1 className="text-5xl font-bold text-white leading-tight">
                            Continue Your Learning Journey
                        </h1>

                        <p className="text-white/80 mt-6 leading-8 text-lg">
                            Access your tutor sessions, manage bookings, and continue
                            learning with professional tutors from anywhere.
                        </p>

                    </div>

                    {/* BOTTOM */}
                    <div className="relative z-10 flex items-center gap-10">

                        <div>

                            <h2 className="text-4xl font-bold text-white">
                                500+
                            </h2>

                            <p className="text-white/70 mt-2">
                                Active Students
                            </p>

                        </div>

                        <div>

                            <h2 className="text-4xl font-bold text-white">
                                120+
                            </h2>

                            <p className="text-white/70 mt-2">
                                Expert Tutors
                            </p>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="p-6 md:p-10 lg:p-14 flex items-center">

                    <div className="w-full">

                        {/* TOP */}
                        <div className="mb-10">

                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00B7B5]/10 border border-[#00B7B5]/20 mb-6">

                                <div className="w-2 h-2 rounded-full bg-[#00B7B5]"></div>

                                <span className="text-sm font-medium text-[#018790]">
                                    Login To Your Account
                                </span>

                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-[#005461]">
                                Login
                            </h1>

                            <p className="text-gray-500 mt-4 leading-7">
                                Login now and continue booking learning sessions with
                                professional tutors.
                            </p>

                        </div>

                        {/* FORM */}
                        <Form
                            className="space-y-6"
                            onSubmit={onSubmit}
                        >

                            {/* EMAIL */}
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                className="w-full"
                            >

                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Email Address
                                </Label>

                                <Input
                                    placeholder="Enter your email"
                                    className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus-within:border-[#00B7B5] focus-within:ring-0 outline-none"
                                />

                                <FieldError />

                            </TextField>

                            {/* PASSWORD */}
                            <TextField
                                isRequired
                                name="password"
                                type="password"
                                className="w-full"
                            >

                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Password
                                </Label>

                                <Input
                                    placeholder="Enter your password"
                                    className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus-within:border-[#00B7B5] focus-within:ring-0 outline-none"
                                />

                                <FieldError />

                            </TextField>

                            {/* FORGOT PASSWORD */}
                            <div className="flex justify-end w-full">

                                <button
                                    type="button"
                                    className="text-sm font-medium text-[#018790] hover:underline"
                                >
                                    Forgot Password?
                                </button>

                            </div>

                            {/* LOGIN BUTTON */}
                            <Button
                                type="submit"
                                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 mt-2"
                            >
                                Login
                            </Button>

                        </Form>

                        {/* DIVIDER */}
                        <div className="flex items-center gap-4 my-8">

                            <div className="flex-1 h-[1px] bg-gray-200"></div>

                            <span className="text-sm text-gray-400">
                                OR
                            </span>

                            <div className="flex-1 h-[1px] bg-gray-200"></div>

                        </div>

                        {/* GOOGLE LOGIN */}
                        <button
                            onClick={handleSigninWithGoogle}
                            className="w-full h-14 rounded-2xl border border-[#00B7B5]/20 bg-white hover:bg-[#00B7B5]/5 transition-all duration-300 font-medium text-[#005461]"
                        >
                            Continue With Google
                        </button>

                        {/* SIGNUP */}
                        <p className="text-center text-gray-500 mt-8">

                            Don&apos;t have an account?{" "}

                            <Link
                                href="/signup"
                                className="text-[#018790] font-semibold hover:underline"
                            >
                                Signup
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LoginPage;