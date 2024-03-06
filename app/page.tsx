import Image from "next/image";
import React from "react";

import { AccordionInfo } from "@/components/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-between">
      {/* BOPPING GVM */}
      <div className="flex items-center justify-center md:m-24 shadow-2xl mt-14 rounded-3xl dark:invert w-full h-[75vh] md:w-[80vw] md:h-[80vh] md:left-24 md:min-h-2.5">
        <div className="flex flex-wrap w-2/6 max-w-44 min-w-20 h-auto">
          <Image
            src="/images/gvm_logo.svg"
            alt="gvm logo"
            className="w-auto h-auto"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="flex flex-col justify-between dark:invert shadow-xl w-full md:w-[20vw] md:h-screen p-4">

        <div className="flex items-center justify-center w-full dark:invert md:h-48 bg-secondary rounded-lg" />

        <AccordionInfo />

        <div className="flex items-center justify-between w-full h-auto rounded-lg dark:invert gap-2">
          <Button variant={"outline"}>Click me</Button>
          <ModeToggle />
        </div>

      </div>
    </main>
  );
}
