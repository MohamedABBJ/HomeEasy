"use client";
import { useState } from "react";
import Link from "next/link";

import { Globe, Menu, CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import DefaultModal from "./DefaultModal";
import LoginRegister from "./LoginRegister";
import World from "./World";

import { Tab } from "./Header";

interface TabProps {
  activeTab: Tab;
  handleSetActiveTab: (tab: Tab) => void;
}
const labelHamburger: string[] = [
  "Sign up",
  "Log in",
  "Gift cards",
  "Airbnb your home",
  "Help center",
];

type Modals = "" | "loginregister" | "world";

export default function Navbar({ handleSetActiveTab, activeTab }: TabProps) {
  const [showModal, setShowModal] = useState<Modals>("");

  return (
    <header className="navbarmd:flex items-center justify-between w-full navbar2xl:px-20 navbarmd:px-10 h-[80px] hidden">
      <div className="flex-1">
        <Link href="/">
          <picture>
            <source media="(min-width: 1128px)" srcSet="/logoDesktop.svg" />
            <source media="(max-width: 1127px)" srcSet="/logoTablet.svg" />
            <img src="/logoTablet.svg" alt="HomeEase logo" />
          </picture>
        </Link>
      </div>

      <div className="text-center flex-1 hidden navbarlg:block">
        <Button
          variant="ghost"
          className={`font-light text-base text-textNavbar-secondary ${
            activeTab === "stays"
              ? "font-medium hover:bg-transparent text-textNavbar-primary"
              : ""
          }`}
          onClick={() => handleSetActiveTab("stays")}
        >
          Stays
        </Button>

        <Button
          variant="ghost"
          className={`font-light text-base text-textNavbar-secondary ${
            activeTab === "experience"
              ? "font-medium hover:bg-transparent text-textNavbar-primary"
              : ""
          }`}
          onClick={() => handleSetActiveTab("experience")}
        >
          Experience
        </Button>
      </div>

      <nav className="flex-1">
        <ul className="flex items-center justify-end">
          <Link href="/airbnbyourhome">
            <Button variant="ghost" className="p-3 text-textNavbar-primary">
              Airbnb your home
            </Button>
          </Link>
          <button
            className="p-3 hover:bg-accent rounded-full mr-2"
            onClick={() => setShowModal("world")}
            data-modalname="world"
          >
            <Globe size={16} strokeWidth={2} color="#222222" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <Button
                  variant="outline"
                  className="py-2 pl-3.5 pr-2 min-h-12 flex gap-3.5 hover:bg-transparent hover:shadow-2lg"
                >
                  <Menu size={16} color="#222222" strokeWidth={1.5} />
                  <CircleUserRound
                    size={32}
                    fill="transparent"
                    strokeWidth={1.5}
                    color="#222222"
                  />
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="px-0 min-w-60 rounded-xl"
            >
              {labelHamburger.map((el, idx) =>
                idx === 0 ? (
                  <DropdownMenuItem
                    className="font-medium pl-4 cursor-pointer py-3"
                    key={idx}
                    onClick={() => setShowModal("loginregister")}
                    data-modalname="loginregister"
                  >
                    {el}
                  </DropdownMenuItem>
                ) : idx === 1 ? (
                  <div key={idx}>
                    <DropdownMenuItem
                      className="pl-4 cursor-pointer py-3"
                      onClick={() => setShowModal("loginregister")}
                      data-modalname="loginregister"
                    >
                      {el}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </div>
                ) : (
                  <Link href={el.replace(/\s/g, "").toLowerCase()} key={idx}>
                    <DropdownMenuItem className="pl-4 cursor-pointer py-3">
                      {el}
                    </DropdownMenuItem>
                  </Link>
                ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </nav>

      {showModal === "loginregister" && (
        <DefaultModal setShowModal={setShowModal} showModal={showModal}>
          <LoginRegister />
        </DefaultModal>
      )}
      {showModal === "world" && (
        <DefaultModal setShowModal={setShowModal} showModal={showModal}>
          <World />
        </DefaultModal>
      )}
    </header>
  );
}
