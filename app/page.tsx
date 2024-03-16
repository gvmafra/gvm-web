"use client";

import React from "react";
import { AccordionInfo } from "@/components/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import DvdBouncer from "@/components/DvdBouncer";
import { DrawerDemo } from "@/components/bottom-drawer";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-between">
      {/* BOPPING GVM */}
      <div className="w-full md:h-full p-1 md:p-1 relative">
        <div className="flex w-full h-full min-h-[600px] md:min-w-64 md:min-h-64 items-center justify-center dark:invert">
          <div className="flex w-full h-[600px] md:h-full z-10">
            <DvdBouncer />
          </div>
        </div>
        <div className="absolute bottom-0 dark:invert dark:-bottom-5 h-5 w-screen md:hidden bg-gradient-to-t from-slate-300 to-white dark:bg-gradient-to-b"/>
      </div>

      {/* SIDEBAR */}
      <div className="flex relative flex-col justify-center dark:invert w-full md:w-[20vw] min-w-[18rem] md:h-screen p-6 py-6 md:py-20">

        {/* from here */}
        <div className="flex flex-col justify-between h-full">
          <AccordionInfo />
          <div className="flex items-center md:p-0 justify-between w-full h-auto rounded-lg dark:invert gap-6">
            <DrawerDemo />
            <ModeToggle />
          </div>
          <div className="h-6 md:h-0 md:hidden" />
        </div>
        {/* to here */}

        <div className="md:absolute md:-left-5 md:w-5 md:h-screen md:opacity-30 md:bg-gradient-to-l from-slate-300 md:to-white dark:md:left-0 dark:md:bg-gradient-to-r" />
      </div>
    </main>
  );
}
