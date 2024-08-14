import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"ul"> { }

export function List(args: Props) {
  return (
    <ul className={cn("flex flex-col gap-4", args.className)} {...args} />
  )
}