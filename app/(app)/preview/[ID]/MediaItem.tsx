import { MediaDTO } from "../../../../src/shared/dtos/mediaDTO";
import { Text } from "@/components/ui/text";
import Link from 'next/link'

interface Props {
  media: Omit<MediaDTO, "preview_id">,
  numberOfVersion: number
}

export function MediaItem({ media, numberOfVersion }: Props) {
  return (
    <li className="border border-border rounded-lg p-4">
      <Link
        className=""
        href={""}>
        <Text>version nº{numberOfVersion}</Text>
      </Link>
    </li>
  )
}
