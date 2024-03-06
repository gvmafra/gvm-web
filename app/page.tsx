import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-screen items-center justify-between">
      <div className="flex items-center justify-center md:m-24 shadow-inner bg-slate-300 rounded-xl w-full h-screen md:w-[80vw] md:h-[80vh] md:left-24 md:min-h-2.5">
        <div className="flex flex-wrap w-2/6 max-w-44 min-w-20 h-auto">
          <Image
            src="/images/gvm_logo.svg"
            alt="gvm logo"
            className="dark:invert w-auto h-auto"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
      <div className="flex border bg-slate-300 w-full md:w-[20vw] md:h-screen">

      </div>
    </main>
  );
}
