import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";

export function AccordionInfo() {
  // The initial state of the accordion is to have item-1 triggered, and the others not.

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full dark:invert mt-12 mb-12 md:mt-0"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>ABOUT ME</AccordionTrigger>
        <AccordionContent>
          Hey there! My name is <span className="font-bold"> Gabriel, </span>
          and this is my portfolio website. I&apos;ve been honing my skills as a{" "}
          <span className="font-bold">frontend developer</span> for quite a
          while, although I worked in the Architecture and design industry for
          the past few years.
        </AccordionContent>
        <AccordionContent>
          I also do <span className="font-bold">illustrative & creative</span>{" "}
          work. The &quot;bopping&quot; logo you see on the left was created by
          me, along with many others.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>WHY</AccordionTrigger>
        <AccordionContent>
          I created this website in order to showcase and{" "}
          <span className="font-bold">play around</span> with a few ideas -
          think creative coding, fun animations and else. I will be adding more
          content as time goes by.
        </AccordionContent>
        <AccordionContent>
          It is a<span className="font-bold">{" "}work in progress</span>.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>WORK</AccordionTrigger>

        <AccordionContent>
          Here are a few projects I&apos;ve worked on:
        </AccordionContent>

        <AccordionContent className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center justify-between gap-2">
            <Link href="https://www.sociable.how/">
              <Button variant="default" className="w-full">
                Sociable AI
              </Button>
            </Link>
            <p className="w-full text-center text-xs font-thin">
              (Frontend | UI)
            </p>
          </div>

          <div className="flex flex-col items-center justify-between gap-2">
            <Link href="https://mgamesjogosmatematicos.itch.io/fratix">
              <Button variant="default" className="w-[110px]">
                Fratix
              </Button>
            </Link>
            <p className="w-full text-center text-xs font-thin">(Fullstack)</p>
          </div>

          <div className="flex flex-col items-center justify-between gap-2">
            <Link href="https://www.rootsafrica.org/">
              <Button variant="default" className="w-[110px]">
                Roots Africa
              </Button>
            </Link>
            <p className="w-full text-center text-xs font-thin">(Web Design)</p>
          </div>

          <div className="flex flex-col items-center justify-between gap-2">
            <Link href="https://www.donnyankri.com/">
              <Button variant="default" className="w-[110px]">
                DAA
              </Button>
            </Link>
            <p className="w-full text-center text-xs font-thin">
              (Arch. Design)
            </p>
          </div>

          <div className="flex flex-col items-center justify-between gap-2">
            <Link href="https://www.sotopllc.com/">
              <Button variant="default" className="w-[110px]">
                SOTO
              </Button>
            </Link>
            <p className="w-full text-center text-xs font-thin">
              (Arch. Intern)
            </p>
          </div>

          <div className="flex flex-col items-center justify-between gap-2">
          <Link href="https://www.instagram.com/cog1to/">
              <Button variant="default" className="w-[110px]">
                COGITO
              </Button>
            </Link>
            <p className="w-full text-center text-xs font-thin">
              (Graphic Design)
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>FIND ME</AccordionTrigger>
        <AccordionContent>
          I am currently in the beautiful city of{" "}
          <span className="font-bold">São Paulo</span>, open to work. I&apos;m
          also open to <span className="font-bold">freelance work</span> and
          collaborations. Feel free to reach out:
        </AccordionContent>

        <AccordionContent>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://www.linkedin.com/in/gabrielversianimafra/">
              <Button variant="default" className="w-full">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/gvmafra">
              <Button variant="default" className="w-full">
                GitHub
              </Button>
            </Link>
            <Link href="https://twitter.com/CogitoGVM">
              <Button variant="default" className="w-full">
                Twitter (X)
              </Button>
            </Link>
            <Link href="https://www.instagram.com/gvmafra/">
              <Button variant="default" className="w-full">
                Instagram
              </Button>
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
