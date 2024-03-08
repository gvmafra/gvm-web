"use client";

import React, { useState, useEffect } from "react";
import { AccordionInfo } from "@/components/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import DvdBouncer from "@/components/DvdBouncer";
import { DrawerDemo } from "@/components/bottom-drawer";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-between">
      {/* BOPPING GVM */}
      <div className="w-full h-full md:p-20 md:px-40">
        <div className="flex w-full h-full min-h-[600px] md:min-h-max items-center justify-center md:rounded-2xl dark:invert shadow-[0_20px_30px_4px_rgb(0,0,0,0.4)] md:shadow-[0_0_15px_2px_rgb(0,0,0,0.4)]">
          <div className="flex w-full h-[600px] md:h-full">
            <DvdBouncer />
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="flex flex-col justify-center dark:invert md:shadow-[0_0_15px_2px_rgb(0,0,0,0.4)] w-full md:w-[20vw] min-w-[300px] md:h-screen p-6 py-6 md:py-20">
        <div className="flex flex-col justify-between h-full">

          <AccordionInfo />

          <div className="flex items-center md:p-0 justify-between w-full h-auto rounded-lg dark:invert gap-6">
              <DrawerDemo />
            <ModeToggle />
          </div>

          <div className="h-6 md:h-0 md:hidden" />
        </div>
      </div>
    </main>
  );
}
