import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerDemo() {

  return (
    <Drawer>

      <DrawerTrigger asChild>
        <Button variant="outline" className="flex-grow">Testing...</Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto py-4 w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-center">Under construction.</DrawerTitle>
            <DrawerDescription className="text-center"></DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
