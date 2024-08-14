import Link from "next/link";
import moment from "moment";
import { PreviewDTO } from "../../../src/shared/dtos/previewDTO";
import { Text } from "../ui/text";

export function PreviewItem({ created_at, id, title }: PreviewDTO) {
  return (
    <li key={id}>
      <Link
        className="rounded-lg flex flex-col bg-secondary p-4 gap-2 border border-border hover:-translate-y-1 transition hover:shadow-xl"
        href={`/preview/${id}`}>
        <Text>{title}</Text>
        <Text intent={"detail"}>{moment(created_at).fromNow()}</Text>
      </Link>
    </li>
  )
}
