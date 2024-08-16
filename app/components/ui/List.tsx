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
      divide: {
        true: "divide-y divide-border"
      }
    },
    defaultVariants: {
      gap: "big",
      vertical: true,
      divide: false
    }
  }
)

type Props = ComponentProps<"ul"> & VariantProps<typeof listStyle>

export function List({ gap, vertical, className, divide, ...args }: Props) {
  return (
    <ul className={cn(listStyle({ gap, vertical, divide, className }))} {...args} />
  )
}