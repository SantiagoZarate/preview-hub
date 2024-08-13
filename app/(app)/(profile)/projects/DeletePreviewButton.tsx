"use client"

import { CrossMicroIcon } from "@/components/icons/CrossMicroIcon";
import { ButtonIcon } from "@/components/ui/buttonLink";
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
    <ButtonIcon
      onClick={() => execute({ id })}
      disabled={isPending}
      variant={"destructive"}
      icon={<CrossMicroIcon />}>
      delete
    </ButtonIcon>
  )
}
