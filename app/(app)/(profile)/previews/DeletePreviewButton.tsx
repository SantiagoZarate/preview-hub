"use client"

import { CrossMicroIcon } from "@/components/icons/CrossMicroIcon";
import { ButtonLink } from "@/components/ui/buttonLink";
import { deletePreview } from "./actions";
import { useServerAction } from "zsa-react";
import { toast } from "@/components/ui/use-toast";

interface Props {
  id: string
}

export function DeletePreviewButton({ id }: Props) {
  const { execute, isPending } = useServerAction(deletePreview, {
    onError: ({ err }) => {
      toast({ title: "Error deleting preview", description: "Try again" })
    },
    onSuccess: () => {
      toast({ title: "Preview deleted succesfully" })
    }
  })

  return (
    <ButtonLink
      onClick={() => execute({ id })}
      disabled={isPending}
      variant={"destructive"}
      icon={<CrossMicroIcon />}>
      delete
    </ButtonLink>
  )
}
