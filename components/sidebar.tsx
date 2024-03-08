import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";

export function AccordionInfo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full dark:invert mt-12 mb-12 md:mt-0"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>ABOUT ME</AccordionTrigger>
        <AccordionContent className="mt-6">
          Hey there. My name is <span className="font-bold">Gabriel</span>.
        </AccordionContent>
        <AccordionContent>
          I&apos;m a Brazilian who has lived in the United States for over 10
          years. Around that time, I pursued a degree in{" "}
          <span className="font-bold">Computer Science</span>, right after I
          began playing with code.
        </AccordionContent>
        <AccordionContent className="mb-6">
          Now, <span className="font-bold">I am a software developer.</span>{" "}
          Although I&apos;ve worked in the Architecture and Design industry for
          a few years. I also do illustrative &{" "}
          <span className="font-bold">graphic design</span> work on the side.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>WHY THOUGH</AccordionTrigger>
        <AccordionContent className="mt-6">
          I created this website in order to showcase and{" "}
          <span className="font-bold">play around</span> with a few ideas. I
          will be adding more content as time goes by.
        </AccordionContent>

        <AccordionContent className="mb-6">
          I also wanted to pay homage to my trajectory along the years. Needless
          to say, it&apos;s a work in progress.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>WORK</AccordionTrigger>
        <AccordionContent className="my-6">
          <div className="flex items-center justify-between">
            <Link href="https://www.sociable.how/">
              <Button variant="link" className="w-full">
                Sociable AI
              </Button>
            </Link>
            <p className="p-4 text-right ">Frontend | UI</p>
          </div>

          <div className="flex items-center justify-between">
            <Link href="https://mgamesjogosmatematicos.itch.io/fratix">
              <Button variant="link" className="w-full">
                Fratix
              </Button>
            </Link>
            <p className="p-4 text-right ">Fullstack</p>
          </div>

          <div className="flex items-center justify-between">
            <Link href="https://www.rootsafrica.org/">
              <Button variant="link" className="w-full">
                Roots Africa
              </Button>
            </Link>
            <p className="p-4 text-right ">Web Design</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>WHERE I AM</AccordionTrigger>
        <AccordionContent className="mt-6">
          I currently reside in the city of <span className="font-bold">São Paulo</span>, Brazil. I&apos;m open to new opportunities and challenges.
        </AccordionContent>

        <AccordionContent>
          I&apos;m also open to <span className="font-bold">freelance work</span> and collaborations. Feel free to reach out.
        </AccordionContent>

        <AccordionContent>
          You can find me on:
          <div className="grid grid-cols-2 my-6">

          <Link href="https://www.linkedin.com/in/gabrielversianimafra/">
            <Button variant="link" className="w-full">LinkedIn</Button>
          </Link>
          <Link href="https://github.com/gvmafra">
            <Button variant="link" className="w-full">GitHub</Button>
          </Link>
          <Link href="https://twitter.com/home">
            <Button variant="link" className="w-full">Twitter (X)</Button>
          </Link>
          <Link href="https://www.instagram.com/gvmafra/">
            <Button variant="link" className="w-full">Instagram</Button>
          </Link>
          </div>
        </AccordionContent>

      </AccordionItem>
    </Accordion>
  );
}
