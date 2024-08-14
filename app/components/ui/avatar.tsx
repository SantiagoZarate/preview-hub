import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const avatarStyle = cva(
  'rounded-full overflow-hidden',
  {
    variants: {
      size: {
        default: "size-12",
        small: "size-8",
        tiny: "size-4"
      },
    },
    defaultVariants: {
      size: "default"
    }
  }
)

type Props = VariantProps<typeof avatarStyle> & ComponentProps<"img">

export default function Avatar({ size, className, ...args }: Props) {
  return (
    <picture className={avatarStyle({ size, className })}>
      <img
        className="w-full h-full object-cover"
        src={args.src ?? "/images/default-pfp.webp"}
        alt="profile picture"
        {...args}
      />
    </picture>
  )
}