"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();
    const [header, setHeader] = useState("bg-green-700 text-white");
    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeader("bg-white")
            : setHeader("bg-green-700 text-white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    });

    return (
        <nav
            className={`${pathname === "/" ? header : "bg-white border-b border-slate-200"} ${pathname.includes("/studio") ? "hidden" : "block"} z-50 transition-all duration-300 sticky top-0`}
        >
            <div className="w-full h-[5rem] flex justify-between items-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
                <div>
                    <Image src={"/assets/logo1.png"} unoptimized alt="logo" width={100} height={100} className="w-72" />
                </div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
