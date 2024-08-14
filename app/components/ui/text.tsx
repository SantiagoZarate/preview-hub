import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

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

type Props = VariantProps<typeof textVariants> & React.ComponentProps<"p">

const Text = React.forwardRef<HTMLParagraphElement, Props>(({ className, intent, hoverable, ...props }, ref) => (
  <p
    ref={ref}
    className={textVariants({ intent, hoverable, className })}
    {...props}
  />
))

Text.displayName = "Text"

export { Text }
