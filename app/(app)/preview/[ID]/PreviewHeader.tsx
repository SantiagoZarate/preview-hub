import Avatar from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import moment from "moment";
import Link from "next/link";
import { UserDTO } from "../../../../src/shared/dtos/userDTO";

interface Props {
  title: string;
  created_at: string;
  user: UserDTO
}

export function PreviewHeader({ created_at, title, user }: Props) {
  return (
    <header className="flex flex-col gap-4">
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
    </header>
  )
}
