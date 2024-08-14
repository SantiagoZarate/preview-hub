import { ComponentProps, PropsWithChildren } from "react"
import { Text } from "./text"

export function SectionSeparator({ children }: PropsWithChildren) {
  return (
    <header className="flex items-center gap-2">
      <Text>
        {children}
      </Text>
      <div className="w-full bg-border h-[1px]" />
    </header>
  )
}

export function Section(args: ComponentProps<"section">) {
  return <section className="flex flex-col gap-4" {...args} />
}
