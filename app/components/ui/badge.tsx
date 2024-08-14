import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const badgeStyles = cva(
  `px-4 py-2 uppercase rounded-full text-xs font-bold`,
  {
    variants: {
      variant: {
        default: "bg-secondary text-primary border border-primary"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

type Props = ComponentProps<"p"> & VariantProps<typeof badgeStyles>

export function Badge({ variant, className, ...args }: Props) {
  return (
    <p className={badgeStyles({ variant, className })} {...args} />
  )
}