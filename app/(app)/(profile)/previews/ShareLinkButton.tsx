"use client"

import { LinkMicroIcon } from "@/components/icons/LinkMicroIcon";
import { ButtonLink } from "@/components/ui/buttonLink";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  id: string
}

export function ShareLinkButton({ id }: Props) {
  const shareLink = "http://localhost:3000/preview/" + id
  const { toast } = useToast()

  const handleClick = () => {
    navigator.clipboard.writeText(shareLink)
    toast({
      title: "Preview link copied to your clipboard!",
      description: "Share it with your costumers"
    })
  }

  return (
    <ButtonLink onClick={handleClick} icon={<LinkMicroIcon />}>
      Share
    </ButtonLink>
  )
}
