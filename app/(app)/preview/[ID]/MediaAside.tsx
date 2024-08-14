import { ClockIcon } from "@/components/icons/ClockIcon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";
import { PropsWithChildren } from "react";
import MediaForm from "./MediaForm";
import { ButtonIcon } from "@/components/ui/buttonLink";
import { PlusIcon } from "@/components/icons/PlusIcon";

interface Props extends PropsWithChildren { }

export function MediaAside({ children }: Props) {
  return (
    <aside className="flex flex-col gap-4">
      <header className="flex items-center gap-1 border-b border-border py-2">
        <ClockIcon />
        <Text intent={"title"}>Other versions</Text>
      </header>
      {children}
      <Dialog>
        <DialogTrigger>
          <ButtonIcon
            icon={<PlusIcon />}
            className="w-full"
            asChild
          >
            Add new version
          </ButtonIcon>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Add a new preview
            </DialogTitle>
          </DialogHeader>
          <MediaForm />
        </DialogContent>
      </Dialog>
    </aside>
  )
}
