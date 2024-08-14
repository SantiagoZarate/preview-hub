import { ClockIcon } from "@/components/icons/ClockIcon";
import { Text } from "@/components/ui/text";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
}

export function MediaAside({ children }: Props) {
  return (
    <aside className="flex flex-col gap-4">
      <header className="flex items-center gap-1 border-b border-border py-2">
        <ClockIcon />
        <Text intent={"title"}>Other versions</Text>
      </header>
      {children}
    </aside>
  )
}
