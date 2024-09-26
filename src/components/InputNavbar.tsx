"use client";

import { useState } from "react";
import { useActiveModals } from ".././hooks/useActiveModals";

import Inputs from "./Inputs";
import InputDestinations from "./InputDestinations";
import InputCalendar from "./InputCalendar";
import InputGuest from "./InputGuest";
import ResetInput from "./ResetInput";
import { Search } from "lucide-react";

import { Tab } from "./Header";

interface Tabinput {
    activeTab: Tab;
}
type labelType = {
    id: number;
    title: string;
    descr: string;
    value: number;
    labelInput: string;
};

const labelGuest: labelType[] = [
    {
        id: 0,
        title: "Adults",
        descr: "Age 13 or above",
        value: 0,
        labelInput: "guest",
    },
    {
        id: 1,
        title: "Children",
        descr: "Ages 2 - 12",
        value: 0,
        labelInput: "children",
    },
    {
        id: 2,
        title: "Infants",
        descr: "Under 2",
        value: 0,
        labelInput: "infants",
    },
    {
        id: 3,
        title: "Pets",
        descr: "Bringing a service animal?",
        value: 0,
        labelInput: "pet",
    },
];

type nameModal = "" | "destination" | "checkin" | "checkout" | "who" | "date";

export default function InputNavbar({ activeTab, countries }) {
    const [activeModals, setActiveModals] = useState<nameModal>("");
    const [selected, setSelected] = useState({});
    const [destination, setDestination] = useState<string>("");
    const [counter, setCounter] = useState<labelType[]>(labelGuest);

    const containerModalRef = useActiveModals(setActiveModals);

    return (
        <div className="w-full flex items-center justify-center border-b pb-4">
            <form>
                <div
                    className={`rounded-full shadow-3xl flex relative border  border-[#dddddd] ${activeModals && "bg-[#ebebeb] z-10"}`}
                    ref={containerModalRef}
                >
                    <Inputs type="big" name="destination" activeModals={activeModals}>
                        <p className="text-xs font-medium text-textNavbar-primary">Where</p>
                        <input
                            type="text"
                            name="destination"
                            placeholder="Search destination"
                            className="text-textNavbar-primary font-medium text-sm placeholder:font-normal placeholder:text-[hsl(0,0%,69%)] border-none outline-none focus:border-none focs:outline-none bg-transparent"
                            value={destination ? destination : ""}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                        {activeModals === "destination" ? (
                            <InputDestinations
                                setDestination={setDestination}
                                destination={destination}
                                countries={countries}
                            />
                        ) : (
                            ""
                        )}

                        {activeModals === "destination" && destination ? (
                            <ResetInput action={setDestination} target={destination} />
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

                                <input
                                    type="hidden"
                                    name="checkin"
                                    value={
                                        selected.from
                                            ? selected.from.toISOString().slice(0, 10)
                                            : ""
                                    }
                                />
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
                                    <InputCalendar
                                        setSelected={setSelected}
                                        selected={selected}
                                    />
                                ) : (
                                    ""
                                )}

                                {activeModals === "checkin" && selected.from ? (
                                    <ResetInput action={setSelected} target={selected} />
                                ) : (
                                    ""
                                )}
                            </Inputs>

                            <Inputs type="small" name="checkout" activeModals={activeModals}>
                                <p className="text-xs font-medium text-textNavbar-primary">
                                    Check out
                                </p>

                                <input
                                    type="hidden"
                                    name="checkout"
                                    value={
                                        selected.to ? selected.to.toISOString().slice(0, 10) : ""
                                    }
                                />

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

                                {activeModals === "checkout" && selected.to ? (
                                    <ResetInput action={setSelected} target={selected} />
                                ) : (
                                    ""
                                )}
                            </Inputs>
                        </>
                    ) : (
                        <Inputs type="big" name="date" activeModals={activeModals}>
                            <p className="text-xs font-medium text-textNavbar-primary">
                                {" "}
                                Date
                            </p>

                            <input
                                type="hidden"
                                name="checkin"
                                value={
                                    selected.from ? selected.from.toISOString().slice(0, 10) : ""
                                }
                            />

                            <input
                                type="hidden"
                                name="checkout"
                                value={
                                    selected.to ? selected.to.toISOString().slice(0, 10) : ""
                                }
                            />

                            {Object.keys(selected).length !== 0 ? (
                                <p className="text-sm text-textNavbar-primary font-medium">
                                    {selected.from
                                        ? selected.from.toLocaleString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                        : ""}

                                    {selected.from && selected.to ? " - " : ""}

                                    {selected.to
                                        ? selected.to.toLocaleString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                        : ""}
                                </p>
                            ) : (
                                <p className="text-sm text-textNavbar-secondary">Add dates</p>
                            )}

                            {activeModals === "date" ? (
                                <InputCalendar
                                    type={activeModals}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            ) : (
                                ""
                            )}

                            {(activeModals === "checkout" && selected.to) || selected.from ? (
                                <ResetInput action={setSelected} target={selected} />
                            ) : (
                                ""
                            )}
                        </Inputs>
                    )}

                    <Inputs type="bigNoBorder" name="who" activeModals={activeModals}>
                        <p className="text-xs font-medium text-textNavbar-primary"> Who</p>

                        {/*Map ?*/}
                        <input type="hidden" name="adults" value={counter[0].value} />
                        <input type="hidden" name="infants" value={counter[1].value} />
                        <input type="hidden" name="children" value={counter[2].value} />
                        <input type="hidden" name="pets" value={counter[3].value} />

                        {counter.filter((el) => el.value > 0).length > 0 ? (
                            <>
                                <span className="text-textNavbar-primary text-sm font-medium">
                                    {counter[0].value} {counter[0].value > 1 ? "guests" : "guest"}
                                </span>

                                {counter.filter((el) => el.value > 0).length > 1
                                    ? counter
                                        .filter((el) => el.value > 0)
                                        .slice(1, 2)
                                        .map((el) => (
                                            <span
                                                key={el.id}
                                                className="text-textNavbar-primary text-sm font-medium"
                                            >
                                                , {el.value} {el.labelInput.slice(0, 3) + "..."}{" "}
                                            </span>
                                        ))
                                    : ""}
                            </>
                        ) : (
                            <p className="text-sm text-textNavbar-secondary">Add guests</p>
                        )}

                        {activeModals === "who" ? (
                            <InputGuest setCounter={setCounter} counter={counter} />
                        ) : (
                            ""
                        )}

                        {activeModals === "who" &&
                            counter.filter((el) => el.value > 0).length ? (
                            <ResetInput
                                action={setCounter}
                                target={counter}
                                type={activeModals}
                            />
                        ) : (
                            ""
                        )}
                    </Inputs>
                    <button
                        className={`absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer ${!activeModals ? "w-12 h-12" : "w-[112px] h-12"} bg-bgaccent hover:brightness-90 flex justify-center items-center gap-2 rounded-full `}
                        type="submit"
                    >
                        <Search size={18} color="#ffffff" strokeWidth={3} />
                        {activeModals ? (
                            <span className="text-white text-sm font-medium">Search</span>
                        ) : (
                            ""
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
