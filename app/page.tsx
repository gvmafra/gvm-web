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
      <div className="w-full h-full md:p-20 md:px-40">
        <div className="flex w-full h-full min-h-[600px] md:min-w-64 md:min-h-64 items-center justify-center md:rounded-2xl dark:invert shadow-[0_10px_15px_2px_rgb(0,0,0,0.4)] dark:shadow-[inset_0_0px_20px_5px_rgb(0,0,0,0.4)] md:shadow-[0_0_15px_2px_rgb(0,0,0,0.5)] md:dark:shadow-[inset_0_0_15px_2px_rgb(0,0,0,0.5)]">
          <div className="flex w-full h-[600px] md:h-full">
            <DvdBouncer />
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="flex relative flex-col justify-center dark:invert w-full md:w-[20vw] min-w-[300px] md:h-screen p-6 py-6 md:py-20">
        <div className="flex flex-col justify-between h-full">
          <AccordionInfo />
          <div className="flex items-center md:p-0 justify-between w-full h-auto rounded-lg dark:invert gap-6">
            <DrawerDemo />
            <ModeToggle />
          </div>
          <div className="h-6 md:h-0 md:hidden" />
        </div>
        <div className="md:absolute md:-left-3 md:w-3 md:h-screen md:opacity-30 md:bg-gradient-to-l md:from-black md:to-white dark:md:left-0 dark:md:bg-gradient-to-r" />
      </div>
    </main>
  );
}
