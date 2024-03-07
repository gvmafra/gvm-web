import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionInfo() {
  return (
    <Accordion type="single" collapsible className="w-full dark:invert mt-12 mb-12 md:mt-0">
      <AccordionItem value="item-1">
        <AccordionTrigger>ABOUT ME</AccordionTrigger>
        <AccordionContent>
          I created this website in order to showcase my skills and projects.
        </AccordionContent>
        <AccordionContent>
          I also wanted to pay homage to my trajectory along the years.
        </AccordionContent>
        <AccordionContent>
        Needless to say, it&apos;s a work in progress.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>WHY THOUGH</AccordionTrigger>
        <AccordionContent>
          I created this website in order to showcase my skills and projects.
        </AccordionContent>
        <AccordionContent>
          I also wanted to pay homage to my trajectory along the years.
        </AccordionContent>
        <AccordionContent>
        Needless to say, it&apos;s a work in progress.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>WORK &...</AccordionTrigger>
        <AccordionContent>
          I created this website in order to showcase my skills and projects.
        </AccordionContent>
        <AccordionContent>
          I also wanted to pay homage to my trajectory along the years.
        </AccordionContent>
        <AccordionContent>
        Needless to say, it&apos;s a work in progress.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>WHERE I AM</AccordionTrigger>
        <AccordionContent>
          I created this website in order to showcase my skills and projects.
        </AccordionContent>
        <AccordionContent>
          I also wanted to pay homage to my trajectory along the years.
        </AccordionContent>
        <AccordionContent>
        Needless to say, it&apos;s a work in progress.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
