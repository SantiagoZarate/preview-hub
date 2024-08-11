import { Text } from "@/components/ui/text";
import { profileLinks } from "@/data/constants";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <section className="grid grid-cols-[auto_1fr] h-full">
      <aside className="h-full border-r border-border">
        <ul className="flex flex-col p-4 gap-2">
          {
            profileLinks.map(link => (
              <Link
                key={link.value}
                className="p-2 w-36  bg-secondary rounded-md hover:bg-primary-foreground"
                href={link.path}>
                <Text>
                  {link.value}
                </Text>
              </Link>
            ))
          }
        </ul>
      </aside>
      <section className="p-4">
        {children}
      </section>
    </section>
  )
}