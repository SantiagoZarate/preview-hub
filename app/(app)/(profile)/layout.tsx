import { AsideMenu } from "@/components/common/asideMenu/AsideMenu";
import { PropsWithChildren } from "react";

export default function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <section className="grid grid-cols-[auto_1fr] h-full">
      <AsideMenu />
      <section className="p-4">
        {children}
      </section>
    </section>
  )
}