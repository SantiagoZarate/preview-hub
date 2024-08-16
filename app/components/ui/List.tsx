import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from 'class-variance-authority'

const listStyle = cva(
  'flex',
  {
    variants: {
      gap: {
        big: "gap-4",
        small: "gap-2",
        off: "gap-0"
      },
      vertical: {
        true: "flex-col"
      },
    },
    defaultVariants: {
      gap: "big",
      vertical: true
    }
  }
)

type Props = ComponentProps<"ul"> & VariantProps<typeof listStyle>

export function List({ gap, vertical, className, ...args }: Props) {
  return (
    <ul className={cn(listStyle({ gap, vertical, className }))} {...args} />
  )
}