import Avatar from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import moment from "moment";
import Link from "next/link";
import { UserDTO } from "../../../../src/shared/dtos/userDTO";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Section } from "@/components/ui/section";
import { VerticaEllipsis } from "@/components/icons/VerticaEllipsis";
import { ButtonIcon } from "@/components/ui/buttonLink";
import { CrossMicroIcon } from "@/components/icons/CrossMicroIcon";
import { List } from "@/components/ui/List";
import { ServiceLocator } from "@service/serviceLocator";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

interface Props {
  title: string;
  created_at: string;
  user: UserDTO;
  preview_id: string;
  project_id: string;
}

export function PreviewHeader({ created_at, title, user, preview_id, project_id }: Props) {
  const deletePreview = async () => {
    "use server"

    const previewService = ServiceLocator.getService("previewService")

    try {
      await previewService.delete(preview_id)
    } catch (error) {
      console.log("There was an error")
    }

    revalidatePath(`/projects/${project_id}`, "page")
    redirect(`/projects/${project_id}`)
  }

  return (
    <header className="flex justify-between items-center">
      <Section>
        <h2 className="text-xl">{title}</h2>
        <footer className="flex gap-2 items-center">
          <Avatar size={"default"} />
          <div className="flex flex-col gap-2">
            <Link href={`/${user.id}`}>
              <Text hoverable>{user.username}</Text>
            </Link>
            <Text className="" intent={"detail"}>{moment(created_at).fromNow()}</Text>
          </div>
        </footer>
      </Section>
      <Popover>
        <PopoverTrigger>
          <span className="border border-border rounded-md  flex p-2">
            <VerticaEllipsis />
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-0">
          <List gap={"off"}>
            <form action={deletePreview}>
              <ButtonIcon variant={"ghost"} icon={<CrossMicroIcon />}>
                Delete preview
              </ButtonIcon>
            </form>
          </List>
        </PopoverContent>
      </Popover>
    </header>
  )
}
