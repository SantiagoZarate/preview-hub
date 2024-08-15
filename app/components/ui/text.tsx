import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

const textVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize",
  {
    variants: {
      intent: {
        regular: "",
        title: "uppercase text-base tracking-wide font-bold",
        detail: "text-xs font-thin italic"
      },
      hoverable: {
        true: "hover:-translate-y-[2px] transition"
      }
    },
    defaultVariants: {
      intent: "regular",
      hoverable: false
    }
  }
)

type Props = VariantProps<typeof textVariants> & React.ComponentProps<"p"> & {
  asChild?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, Props>(({ className, intent, hoverable, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "p"
  return (
    <Comp
      ref={ref}
      className={textVariants({ intent, hoverable, className })}
      {...props}
    />
  )
}
)

Text.displayName = "Text"

export { Text }
