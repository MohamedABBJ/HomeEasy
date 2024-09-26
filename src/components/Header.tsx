"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import InputNavbar from "./InputNavbar";

type Tab = "stays" | "experience";
export default function Header({ countries }) {
    const [activeTab, setActiveTab] = useState<Tab>("stays");

    function handleSetActiveTab(tab: Tab): void {
        setActiveTab(tab);
    }

    return (
        <>
            <Navbar activeTab={activeTab} handleSetActiveTab={handleSetActiveTab} />
            <InputNavbar activeTab={activeTab} countries={countries} />
        </>
    );
}
