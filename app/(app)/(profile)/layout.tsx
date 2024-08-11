import { profileLinks } from "@/data/constants";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <section className="grid grid-cols-[auto_1fr] gap-4 h-full">
      <aside className="h-full border-r border-border">
        <ul className="flex flex-col">
          {
            profileLinks.map(link => (
              <Link href={link.path}>
                {link.value}
              </Link>
            ))
          }
        </ul>
        some links go here
      </aside>
      {children}
    </section>
  )
}