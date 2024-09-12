"use client";

import { useState } from "react";
import { useActiveModals } from ".././hooks/useActiveModals";

import Inputs from "./Inputs";
import InputModals from "./InputModals";
import InputCalendar from "./InputCalendar";
import InputGuest from "./InputGuest";
import { Search } from "lucide-react";

import { Tab } from "./Header";

interface Tabinput {
    activeTab: Tab;
}

type nameModal = "" | "destination" | "checkin" | "checkout" | "who" | "date";

export default function InputNavbar({ activeTab }: Tabinput) {
    const [activeModals, setActiveModals] = useState<nameModal>("");
    const containerModalRef = useActiveModals(setActiveModals);

    return (
        <div className="w-full flex items-center justify-center border-b pb-4">
            <div
                className={`rounded-full shadow-3xl flex relative ${activeModals && "bg-[#ebebeb] z-10"}`}
                ref={containerModalRef}
            >
                <Inputs type="big" name="destination" activeModals={activeModals}>
                    <p className="text-xs font-medium text-textNavbar-primary">Where</p>
                    <input
                        type="text"
                        placeholder="Search destination"
                        className="text-sm text-[hsl(0,0%,69%)] border-none outline-none focus:border-none focs:outline-none bg-transparent"
                    />
                    {activeModals === "destination" ? <InputModals /> : ""}
                </Inputs>
                {activeTab === "stays" ? (
                    <>
                        <Inputs type="small" name="checkin" activeModals={activeModals}>
                            <p className="text-xs font-medium text-textNavbar-primary">
                                Check in
                            </p>
                            <p className="text-sm text-textNavbar-secondary"> Add dates</p>
                            {activeModals === "checkin" ? <InputCalendar /> : ""}
                        </Inputs>

                        <Inputs type="small" name="checkout" activeModals={activeModals}>
                            <p className="text-xs font-medium text-textNavbar-primary">
                                Check out
                            </p>
                            <p className="text-sm text-textNavbar-secondary"> Add dates</p>
                            {activeModals === "checkout" ? (
                                <p className="absolute top-0 left-0"> Placeholder </p>
                            ) : (
                                ""
                            )}
                        </Inputs>
                    </>
                ) : (
                    <Inputs type="big" name="date" activeModals={activeModals}>
                        <p className="text-xs font-medium text-textNavbar-primary"> Date</p>
                        <p className="text-sm text-textNavbar-secondary"> Add dates</p>
                        {activeModals === "date" ? (
                            <InputCalendar type={activeModals} />
                        ) : (
                            ""
                        )}
                    </Inputs>
                )}

                <Inputs type="bigNoBorder" name="who" activeModals={activeModals}>
                    <p className="text-xs font-medium text-textNavbar-primary"> Who</p>
                    <p className="text-sm text-textNavbar-secondary"> Add guests</p>
                    {activeModals === "who" ? <InputGuest /> : ""}
                </Inputs>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer w-12 h-12 bg-bgaccent hover:brightness-90 flex justify-center items-center rounded-full ">
                    <Search size={18} color="#ffffff" strokeWidth={3} />
                </div>
            </div>
        </div>
    );
}
