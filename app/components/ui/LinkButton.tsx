import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";

interface Props extends ButtonProps {
  href: string;
}

export function LinkButton({ href, ...args }: Props) {
  return (
    <Link href={href}>
      <Button {...args} />
    </Link>
  )
}
