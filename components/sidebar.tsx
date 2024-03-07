import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionInfo() {
  return (
    <Accordion type="single" collapsible className="w-full dark:invert my-12">
      <AccordionItem value="item-4">
        <AccordionTrigger>WHY?</AccordionTrigger>
        <AccordionContent className="gap-2">
          I created this website in order to showcase my skills and projects. I
          also wanted to pay homage to my trajectory along the years. Needless
          to say, it&apos;s a work in progress.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-1">
        <AccordionTrigger>ABOUT</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>WORK</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>WHERE?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
