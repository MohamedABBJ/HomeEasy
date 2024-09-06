"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

type labelType = {
  id: number
  title: string
  descr: string
  value: number
}

const labelGuest: labelType[] = [
  {
    id: 0,
    title: "Adults",
    descr: "Age 13 or above",
    value: 0,
  },
  {
    id: 1,
    title: "Children",
    descr: "Ages 2 - 12",
    value: 0,
  },
  {
    id: 2,
    title: "Infants",
    descr: "Under 2",
    value: 0,
  },
  {
    id: 3,
    title: "Pets",
    descr: "Bringing a service animal?",
    value: 0,
  },
]

export default function InputGuest() {
  const [counter, setCounter] = useState<labelType[]>(labelGuest)

  function handleCounter(idx: number, type: "plus" | "minus") {
    setCounter((c) =>
      c.map((el, labelIdx) => {
        if (labelIdx === idx) {
          if (type === "minus" && el.value > 0) {
            return { ...el, value: el.value - 1 }
          } else if (type === "plus") {
            return { ...el, value: el.value + 1 }
          }
        }
        return el
      })
    )
  }

  return (
    <div className="absolute shadow-md bg-popover rounded-3xl top-16 right-0 border py-4 px-8 min-w-[406px] cursor-auto">
      {/*--------*/}

      {counter.map((el, idx) => (
        <div
          className={`flex justify-between py-6 ${
            idx !== labelGuest.length - 1 ? "border-b" : ""
          }`}
          key={el.id}
        >
          <div className="">
            <h4 className="font-medium text-textNavbar-primary ">{el.title}</h4>
            <p
              className={`text-sm text-textNavbar-secondary py-1 ${
                idx === labelGuest.length - 1 ? "underline font-medium" : ""
              }`}
            >
              {el.descr}
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
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
  )
}
