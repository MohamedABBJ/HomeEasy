"use client"

import { useState, useRef, useEffect } from "react"
import { useActiveModals } from ".././hooks/useActiveModals"

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

type nameModal = "" | "destination" | "checkin" | "checkout" | "who"

export default function InputNavbar() {
  const [activeModals, setActiveModals] = useState<nameModal>("")
  const containerModalRef = useActiveModals(setActiveModals)

  return (
    <div className="w-full flex items-center justify-center border-b pb-4">
      <div
        className="rounded-full shadow-3xl flex py-3.5"
        ref={containerModalRef}
      >
        <div
          className="px-8 border-r cursor-pointer relative flex-2"
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
          className="px-6 cursor-pointer border-r relative flex-1"
          data-name="checkin"
        >
          <p className="text-xs font-medium text-textNavbar-primary">
            Check in
          </p>
          <p className="text-sm text-textNavbar-secondary"> Add dates</p>
          {activeModals === "checkin" ? <InputCalendar /> : ""}
        </div>

        <div
          className="px-6 cursor-pointer border-r relative flex-1"
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

        <div className="px-8 cursor-pointer relative flex-2" data-name="who">
          <p className="text-xs font-medium text-textNavbar-primary"> Who</p>
          <p className="text-sm text-textNavbar-secondary"> Add guests</p>
          {activeModals === "who" ? <InputGuest /> : ""}
        </div>
      </div>
    </div>
  )
}
