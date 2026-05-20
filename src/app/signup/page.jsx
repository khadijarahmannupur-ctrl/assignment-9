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
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const SignupPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get("from") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        // console.log(user)

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.photo,
        })
        if (data) {
            router.push(from);
            toast.success('Signup Successfully')
        }

        if (error) {
            toast.error(error.message);
        }
    };

    const handleSigninWithGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
        toast.success('Signup in Successfully')
    }

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
                                Join MediQueue Today
                            </span>
                        </div>

                        <h1 className="text-5xl font-bold text-white leading-tight">
                            Start Your Smart Learning Journey
                        </h1>

                        <p className="text-white/80 mt-6 leading-8 text-lg">
                            Connect with professional tutors, schedule learning
                            sessions, and improve your academic performance with an
                            organized booking experience.
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
                                    Create New Account
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-[#005461]">
                                Sign Up
                            </h1>

                            <p className="text-gray-500 mt-4 leading-7">
                                Register now and book learning sessions with skilled
                                tutors anytime.
                            </p>
                        </div>

                        {/* FORM */}
                        <Form
                            className="space-y-6"
                            onSubmit={onSubmit}
                        >
                            {/* NAME */}
                            <TextField
                                isRequired
                                name="name"
                                className="w-full"
                            >
                                <Label className="mb-3 font-semibold text-[#005461]">
                                    Full Name
                                </Label>

                                <Input
                                    placeholder="Enter your full name"
                                    className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus-within:border-[#00B7B5] focus-within:ring-0 outline-none"
                                />

                                <FieldError />
                            </TextField>

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
                                    placeholder="Enter photo URL"
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
                                validate={(value) => {
                                    if (!/[A-Z]/.test(value)) {
                                        return "Must contain an uppercase letter";
                                    }

                                    if (!/[a-z]/.test(value)) {
                                        return "Must contain a lowercase letter";
                                    }

                                    if (value.length < 6) {
                                        return "Password must be at least 6 characters";
                                    }

                                    return null;
                                }}
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

                            {/* BUTTON */}
                            <Button
                                type="submit"
                                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#005461] to-[#00B7B5] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 mt-4"
                            >
                                Create Account
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

                        {/* GOOGLE */}
                        <button onClick={handleSigninWithGoogle} className="w-full h-14 rounded-2xl border border-[#00B7B5]/20 bg-white hover:bg-[#00B7B5]/5 transition-all duration-300 font-medium text-[#005461]">
                            Continue With Google
                        </button>

                        {/* LOGIN */}
                        <p className="text-center text-gray-500 mt-8">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-[#018790] font-semibold hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;