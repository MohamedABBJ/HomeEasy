"use client";
import { MapPin } from "lucide-react";
const country = [
    {
        id: 0,
        img: "/world.jpg",
        label: "I'm flexible",
    },
    {
        id: 1,
        img: "/us.webp",
        label: "United States",
    },

    {
        id: 2,
        img: "/spain.webp",
        label: "Spain",
    },

    {
        id: 3,
        img: "/southAsia.webp",
        label: "Southeast Asia",
    },

    {
        id: 4,
        img: "/greece.webp",
        label: "Greece",
    },

    {
        id: 5,
        img: "/southAmerica.webp",
        label: "South America",
    },
];

export default function InputDestinations({
    setDestination,
    destination,
    countries,
}) {
    return (
        <div
            className={`cursor-auto absolute shadow-md bg-popover rounded-3xl top-[76px] left-0 border ${!destination ? "py-8 px-6" : "py-6 px-4"} min-w-[428px]`}
        >
            {!destination ? (
                <h4 className="ml-2 mb-4 text-sm font-medium">Search by region</h4>
            ) : (
                ""
            )}

            <div
                className={`${!destination ? "grid grid-cols-3 grid-rows-2" : "flex flex-col"}`}
            >
                {destination
                    ? countries
                        .filter((country) =>
                            country.name.toLowerCase().match(destination.toLowerCase()),
                        )
                        .toSpliced(5)
                        .map((filteredCountry, idx) => (
                            <div
                                key={idx}
                                className="flex items-center px-4 py-2 gap-4 hover:bg-inputModals cursor-pointer rounded-lg"
                                onClick={() => setDestination(filteredCountry.name)}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#dddddd] flex justify-center items-center">
                                    <MapPin strokeWidth={1.3} />
                                </div>
                                <p className="text-textNavbar-primary">
                                    {filteredCountry.name}
                                </p>
                            </div>
                        ))
                    : country.map((el) => (
                        <div
                            key={el.id}
                            className="p-2 rounded-2xl hover:bg-inputModals cursor-pointer"
                            onClick={() =>
                                setDestination((destination) =>
                                    el.label === "I'm flexible" ? (destination = "") : el.label,
                                )
                            }
                        >
                            <div className="rounded-2xl">
                                <img
                                    src={el.img}
                                    alt={el.label}
                                    className="rounded-2xl active:scale-90"
                                />
                            </div>
                            <span className="text-sm">{el.label}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
}
