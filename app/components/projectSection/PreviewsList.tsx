import Link from "next/link";
import moment from "moment";
import { PreviewDTO } from "../../../src/shared/dtos/previewDTO";
import { Text } from "../ui/text";

interface Props {
  previews: PreviewDTO[]
}

export function PreviewsList({ previews }: Props) {
  return (
    <ul className="grid grid-cols-3">
      {previews.map(preview => (
        <li className="" key={preview.id}>
          <Link className="rounded-lg flex flex-col" href={`/preview/${preview.id}`}>
            <Text>{preview.title}</Text>
            <Text intent={"detail"}>{moment(preview.created_at).fromNow()}</Text>
          </Link>
        </li>
      ))}
    </ul>
  )
}
