"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const textVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize",
  {
    variants: {
      intent: {
        regular: "",
        title: "uppercase tracking-wide font-bold"
      }
    },
    defaultVariants: {
      intent: "regular"
    }
  }
)

type Props = VariantProps<typeof textVariants> & React.ComponentProps<"p">

const Text = React.forwardRef<HTMLParagraphElement, Props>(({ className, intent, ...props }, ref) => (
  <p
    ref={ref}
    className={textVariants({ intent, className })}
    {...props}
  />
))

Text.displayName = "Text"

export { Text }
