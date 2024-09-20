"use client";

import { useState } from "react";
import { useActiveModals } from ".././hooks/useActiveModals";

import Inputs from "./Inputs";
import InputDestinations from "./InputDestinations";
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
    const [selected, setSelected] = useState({});
    const [destination, setDestination] = useState<string>("");

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
                        className="text-textNavbar-primary font-medium text-sm placehoder:font-normal placeholder:text-[hsl(0,0%,69%)] border-none outline-none focus:border-none focs:outline-none bg-transparent"
                        value={destination ? destination : ""}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    {activeModals === "destination" ? (
                        <InputDestinations setDestination={setDestination} />
                    ) : (
                        ""
                    )}
                </Inputs>
                {activeTab === "stays" ? (
                    <>
                        <Inputs type="small" name="checkin" activeModals={activeModals}>
                            <p className="text-xs font-medium text-textNavbar-primary">
                                Check in
                            </p>

                            {selected.from ? (
                                <p className="text-sm text-textNavbar-primary font-medium">
                                    {selected.from.toLocaleString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </p>
                            ) : (
                                <p className="text-sm text-textNavbar-secondary">Add dates</p>
                            )}

                            {activeModals === "checkin" ? (
                                <InputCalendar setSelected={setSelected} selected={selected} />
                            ) : (
                                ""
                            )}
                        </Inputs>

                        <Inputs type="small" name="checkout" activeModals={activeModals}>
                            <p className="text-xs font-medium text-textNavbar-primary">
                                Check out
                            </p>

                            {selected.to ? (
                                <p className="text-sm text-textNavbar-primary font-medium">
                                    {selected.to.toLocaleString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </p>
                            ) : (
                                <p className="text-sm text-textNavbar-secondary">Add dates</p>
                            )}

                            {activeModals === "checkout" ? (
                                <InputCalendar
                                    setSelected={setSelected}
                                    selected={selected}
                                    type={activeModals}
                                />
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
                            <InputCalendar
                                type={activeModals}
                                selected={selected}
                                setSelected={setSelected}
                            />
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
