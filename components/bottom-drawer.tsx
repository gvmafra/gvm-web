import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex-grow">
          Testing...
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto py-4 w-full max-w-sm">
          <DrawerHeader className="gap-4">
            <DrawerTitle className="text-center">
              Thank you for exploring!
            </DrawerTitle>
            <DrawerDescription className="text-center">
              If you&apos;ve made it this far, it was either due to interest or
              sheer curiosity. Either way, thank you for visiting my website.
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter className="flex items-center justify-center gap-4">
            <DrawerClose asChild>
              <Button variant="default" className="w-40">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
