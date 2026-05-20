"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

const ErrorPage = ({ error, reset }) => {

    return (
        <section className="min-h-screen bg-[#F4F4F4] flex items-center justify-center px-4 overflow-hidden">

            <div className="relative max-w-5xl w-full rounded-[40px] overflow-hidden border border-red-200 shadow-2xl bg-gradient-to-br from-[#005461] via-[#018790] to-[#00B7B5] p-8 md:p-16">

                {/* BLUR */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center">

                    {/* ERROR CODE */}
                    <h1 className="text-[90px] md:text-[140px] font-black leading-none text-white">
                        ERROR
                    </h1>

                    {/* BADGE */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/20 border border-red-300/20 backdrop-blur-xl mt-2">

                        <div className="w-2 h-2 rounded-full bg-red-300"></div>

                        <span className="text-sm font-medium text-white">
                            Something Went Wrong
                        </span>

                    </div>

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-8 leading-tight">
                        Unexpected Error Occurred
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-white/80 mt-6 text-lg leading-8 max-w-2xl">
                        Something broke while loading this page.
                        Please try again or return to the homepage.
                    </p>

                    {/* ERROR MESSAGE */}
                    {
                        error?.message && (
                            <div className="mt-6 w-full max-w-2xl rounded-2xl bg-black/20 border border-white/10 p-4 text-left overflow-auto">
                                <p className="text-sm text-red-200 break-all">
                                    {error.message}
                                </p>
                            </div>
                        )
                    }

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">

                        <Button
                            onPress={() => reset()}
                            className="w-full sm:w-52 h-14 rounded-2xl bg-white text-[#005461] font-bold text-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            Try Again
                        </Button>

                        <Link href="/">
                            <Button
                                variant="bordered"
                                className="w-full sm:w-52 h-14 rounded-2xl border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
                            >
                                Go Home
                            </Button>
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ErrorPage;