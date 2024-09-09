"use client";

import { useState } from "react";
import { useActiveModals } from ".././hooks/useActiveModals";

import InputModals from "./InputModals";
import InputCalendar from "./InputCalendar";
import InputGuest from "./InputGuest";
import { Search } from "lucide-react";

type nameModal = "" | "destination" | "checkin" | "checkout" | "who";

export default function InputNavbar() {
    const [activeModals, setActiveModals] = useState<nameModal>("");
    const containerModalRef = useActiveModals(setActiveModals);

    return (
        <div className="w-full flex items-center justify-center border-b pb-4">
            <div
                className={`rounded-full shadow-3xl flex relative ${activeModals && "bg-[#ebebeb] z-10"}`}
                ref={containerModalRef}
            >
                <div
                    className={`px-8 py-3.5 cursor-pointer relative  
                     hover:before:opacity-100 hover:after:opacity-0  
                     before:content-[''] before:absolute before:top-0 before:-z-10 before:left-0 before:w-full before:h-full before:rounded-full before:bg-zinc-100 before:opacity-0 
                     after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[1px] after:h-2/4 after:bg-zinc-200 after:-translate-y-1/2
                    ${activeModals === "destination" ? "before:opacity-100 before:z-1 before:bg-white before:shadow-2lg after:opacity-0" : " "}
                    `}
                    data-name="destination"
                >
                    <p className="text-xs font-medium text-textNavbar-primary">Where</p>
                    <input
                        type="text"
                        placeholder="Search destination"
                        className="text-sm text-[hsl(0,0%,69%)] border-none outline-none focus:border-none focs:outline-none bg-transparent"
                    />
                    {activeModals === "destination" ? <InputModals /> : ""}
                </div>

                <div
                    className={`px-6 py-3.5 cursor-pointer  min-w-[140.5px] relative hover:before:opacity-100 hover:after:opacity-0 before:content-[''] before:absolute before:top-0 before:-z-10 before:left-0 before:w-full before:h-full before:rounded-full before:bg-zinc-100 before:opacity-0 after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[1px] after:h-2/4 after:bg-zinc-200 after:-translate-y-1/2
                    ${activeModals === "checkin" ? "before:opacity-100 before:z-1 before:bg-white before:shadow-2lg after:opacity-0" : " "}
                    `}
                    data-name="checkin"
                >
                    <p className="text-xs font-medium text-textNavbar-primary">
                        Check in
                    </p>
                    <p className="text-sm text-textNavbar-secondary"> Add dates</p>
                    {activeModals === "checkin" ? <InputCalendar /> : ""}
                </div>

                <div
                    className={`px-6 py-3.5 cursor-pointer  min-w-[140.5px] relative hover:before:opacity-100 hover:after:opacity-0 before:content-[''] before:absolute before:top-0 before:-z-10 before:left-0 before:w-full before:h-full before:rounded-full before:bg-zinc-100 before:opacity-0 after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[1px] after:h-2/4 after:bg-zinc-200 after:-translate-y-1/2
                    ${activeModals === "checkout" ? "before:opacity-100 before:z-1 before:bg-white before:shadow-2lg after:opacity-0" : " "}
`}
                    data-name="checkout"
                >
                    <p className="text-xs font-medium text-textNavbar-primary">
                        Check out
                    </p>
                    <p className="text-sm text-textNavbar-secondary"> Add dates</p>
                    {activeModals === "checkout" ? (
                        <p className="absolute top-0 left-0"> Placeholder </p>
                    ) : (
                        ""
                    )}
                </div>

                <div
                    className={`px-8 py-3.5 cursor-pointer relative min-w-[261px] hover:before:opacity-100 hover:after:opacity-0 before:content-[''] before:absolute before:top-0 before:-z-10 before:left-0 before:w-full before:h-full before:rounded-full before:bg-zinc-100 before:opacity-0
                    ${activeModals === "who" ? "before:opacity-100 before:z-1 before:bg-white before:shadow-2lg after:opacity-0" : " "}
                     `}
                    data-name="who"
                >
                    <p className="text-xs font-medium text-textNavbar-primary"> Who</p>
                    <p className="text-sm text-textNavbar-secondary"> Add guests</p>
                    {activeModals === "who" ? <InputGuest /> : ""}
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer w-12 h-12 bg-bgaccent hover:brightness-90 flex justify-center items-center rounded-full ">
                    <Search size={18} color="#ffffff" strokeWidth={3} />
                </div>
            </div>
        </div>
    );
}
