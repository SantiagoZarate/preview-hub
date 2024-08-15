import { cva, VariantProps } from 'class-variance-authority';
import Link from "next/link";
import { ComponentProps } from "react";
import { RightArrowMicroIcon } from "../icons/RightArrowMicroIcon";
import { Text } from "./text";

const linkIconStyles = cva(
  'p-2 w-36 flex group items-center rounded-md hover:bg-primary-foreground transition',
  {
    variants: {
      active: {
        true: "bg-transparent outline outline-1 outline-primary",
        false: "bg-secondary"
      }
    },
    defaultVariants: {
      active: false
    }
  }
)

type Props = VariantProps<typeof linkIconStyles> & ComponentProps<"a"> & {
  href: string
}

export function LinkIcon({ href, children, active, className, ...args }: Props) {
  return (
    <Link
      className={linkIconStyles({ active, className })}
      href={href}
      {...args}
    >
      <Text>
        {children}
      </Text>
      <RightArrowMicroIcon className="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition opacity-0" />
    </Link>
  )
}
