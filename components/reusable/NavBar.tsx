"use client";
import React from 'react'
import { MenuIcon } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from 'next/navigation';
const NavBar = () => {
    const router = useRouter();

    const navigateFn = (link: string) => {
        router.push(link);
    }
    return (
        <div className="sm:w-auto w-full  px-4 py-2 bg-primaryCol rounded flex sm:justify-center justify-between items-center gap-2">

            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="font-extralight p-1 border-[1px] rounded" />
                </SheetTrigger>
                <SheetContent side="left" className="bg-primaryCol p-8 w-3/4 border-2 border-l-0 border-secondaryCol rounded-r-lg outline-none">
                    <SheetDescription className="h-full m-auto w-auto flex flex-col justify-center items-center text-secondaryCol gap-4">
                        <div className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/menu') }}>MENU</div>
                        <div className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/reservation') }}>RESERVATIONS</div>
                        <div className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/about') }}>ABOUT</div>
                        <div className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/contact') }}>CONTACT</div>
                        <div className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/blog') }}>BLOG</div>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
            <div className="text-2xl" onClick={() => { navigateFn('/') }}>SUSHIKO</div>
            <div className="font-sans text-xs px-2 py-1 font-light cursor-pointer" onClick={() => { navigateFn('/menu') }}>MENU</div>
            <div className="font-sans text-xs px-2 py-1 font-light cursor-pointer" onClick={() => { navigateFn('/about') }}>ABOUT</div>
            <div className="font-sans text-xs px-2 py-1 font-light cursor-pointer border-[1px] rounded-sm hidden sm:block" onClick={() => { navigateFn('/reservation') }}>BOOK A TABLE</div>
        </div>
    )
}

export default NavBar