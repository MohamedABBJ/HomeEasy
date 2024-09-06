"use client"
import { useState, useRef } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import InputModals from "./InputModals"
import InputCalendar from "./InputCalendar"
import InputGuest from "./InputGuest"

export default function InputNavbar() {
  const [activeModals, setActiveModals] = useState<string>("")
  const containerModalRef = useRef(null)

  function handleActiveModal(e): void {
    const name = e.target.dataset.name || e.target.parentElement.dataset.name

    if (!name && containerModalRef.current.contains(e.target)) {
      setActiveModals((sm) => (sm = sm))
    } else {
      setActiveModals((sm) => (sm = name))
    }
  }

  return (
    <div className="w-full flex items-center justify-center border-b pb-4">
      <div
        className="rounded-full shadow-3xl flex py-3.5"
        onClick={(e) => handleActiveModal(e)}
        ref={containerModalRef}
      >
        <div
          className="px-8 border-r cursor-pointer relative min-w-[284px]"
          data-name="destination"
        >
          <p className="text-xs font-medium text-textNavbar-primary "> Where</p>
          <input
            type="text"
            placeholder="Search destination"
            className="text-sm text-[hsl(0,0%,69%)] border-none outline-none focus:border-none focs:outline-none"
          />
          {activeModals === "destination" ? <InputModals /> : ""}
        </div>

        <div
          className="px-6 cursor-pointer border-r relative"
          data-name="checkin"
        >
          <p className="text-xs font-medium text-textNavbar-primary">
            Check in
          </p>
          <p className="text-sm text-textNavbar-secondary"> Add dates</p>
          {activeModals === "checkin" ? <InputCalendar /> : ""}
        </div>

        <div className="px-6 cursor-pointer border-r" data-name="checkout">
          <p className="text-xs font-medium text-textNavbar-primary">
            Check out
          </p>
          <p className="text-sm text-textNavbar-secondary"> Add dates</p>
        </div>

        <div className="px-8 cursor-pointer relative" data-name="who">
          <p className="text-xs font-medium text-textNavbar-primary"> Who</p>
          <p className="text-sm text-textNavbar-secondary"> Add guests</p>
          {activeModals === "who" ? <InputGuest /> : ""}
        </div>
      </div>
    </div>
  )
}
