"use client";

import { DayPicker } from "react-day-picker";
import { isPast } from "date-fns";
export default function InputCalendar({ type, setSelected, selected }) {
    return (
        <div
            className={`absolute shadow-md bg-popover rounded-3xl top-[76px] ${type === "date" ? "left-1/2" : type === "checkout" ? "left-0" : "left-full"} -translate-x-1/2  border py-4 px-8 min-w-[803px] cursor-auto flex justify-center`}
        >
            <DayPicker
                className="pt-[1.125rem] pb-2.5 px-7"
                mode="range"
                numberOfMonths={2}
                selected={selected}
                onSelect={setSelected}
                disabled={(currentDate) => isPast(currentDate)}
            />
        </div>
    );
}
