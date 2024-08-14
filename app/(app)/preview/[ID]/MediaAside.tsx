import { Text } from "@/components/ui/text";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
}

export function MediaAside({ children }: Props) {
  return (
    <aside className="flex flex-col gap-4">
      <header>
        <Text intent={"title"}>Other versions</Text>
      </header>
      {children}
    </aside>
  )
}
