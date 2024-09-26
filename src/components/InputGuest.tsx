"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function InputGuest({ setCounter, counter }) {
  function handleCounter(idx: number, type: "plus" | "minus") {
    setCounter((c) =>
      c.map((el, labelIdx) => {
        const adultIdx = c.findIndex((label) => label.title === "Adults");
        const checkValues = c.filter(
          (label) => label.title !== "Adults" && label.value > 0,
        );
        if (labelIdx === idx) {
          if (type === "minus" && el.value > 0) {
            if (el.title === "Adults" && checkValues.length && el.value === 1) {
              return el;
            }
            return { ...el, value: el.value - 1 };
          } else if (type === "plus" && el.title !== "Adults") {
            if (c[adultIdx].value === 0) {
              c[adultIdx].value += 1;
            }
            return { ...el, value: el.value + 1 };
          } else if (type === "plus") {
            return { ...el, value: el.value + 1 };
          }
        }
        return el;
      }),
    );
  }

  return (
    <div className="absolute shadow-md bg-popover rounded-3xl top-[76px] right-0 border py-4 px-8 min-w-[406px] cursor-auto">
      {/*--------*/}

      {counter.map((el, idx) => (
        <div
          className={`flex justify-between py-6 ${
            idx !== counter.length - 1 ? "border-b" : ""
          }`}
          key={el.id}
        >
          <div className="">
            <h4 className="font-medium text-textNavbar-primary ">{el.title}</h4>
            <p
              className={`text-sm text-textNavbar-secondary py-1 ${
                idx === counter.length - 1 ? "underline font-medium" : ""
              }`}
            >
              {el.descr}
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              type="button"
              className={`p-2 rounded-full border  text-textNavbar-secondary ${
                !el.value
                  ? "cursor-not-allowed border-gray-200 text-gray-200"
                  : "border-[#6b6b6b]"
              }`}
              onClick={() => handleCounter(idx, "minus")}
            >
              <Minus size={16} color="currentColor" />
            </button>
            <span> {el.value} </span>
            <button
              type="button"
              className="p-2 rounded-full border border-[#6b6b6b]"
              onClick={() => handleCounter(idx, "plus")}
            >
              <Plus size={16} color="#6b6b6b" />
            </button>
          </div>
        </div>
      ))}
      {/*--------*/}
    </div>
  );
}
