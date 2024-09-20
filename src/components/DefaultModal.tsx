"use client";

import { useClickOutside } from ".././hooks/useClickOutside";

import { X } from "lucide-react";

export default function DefaultModal({ children, setShowModal, showModal }) {
    const modalRef = useClickOutside(setShowModal);
    return (
        <>
            <div className="absolute top-0 left-0 w-screen h-screen bg-black/40 z-10"></div>
            <div
                className="min-w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl  z-20 bg-white"
                ref={modalRef}
            >
                <header className="w-full px-6 min-h-16 flex items-center justify-between">
                    <button
                        className="relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:rounded-full before:-z-10 before:-translate-y-1/2 before:w-8 before:h-8  hover:before:bg-[#f7f7f7]"
                        onClick={() => setShowModal("")}
                    >
                        <X size={16} color="#000000" />
                    </button>
                    {showModal === "loginregister" && (
                        <>
                            <h1 className="font-semibold">Log in or sign up</h1>
                            <div></div>
                        </>
                    )}
                </header>
                {children}
            </div>
        </>
    );
}
