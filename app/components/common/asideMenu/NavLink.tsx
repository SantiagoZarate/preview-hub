"use client"

import { LinkIcon } from "@/components/ui/linkIcon";
import { profileLinks } from "@/data/constants";
import { useRouter, usePathname } from 'next/navigation'

export function NavLink() {
  const currentPath = usePathname()

  return (
    <ul className="flex flex-col gap-2">
      {
        profileLinks.map(link => (
          <LinkIcon
            active={currentPath === link.path}
            href={link.path}
            key={link.value}>
            {link.value}
          </LinkIcon>
        ))
      }
    </ul>
  )
}
