import { PreviewDTO } from "../../../src/shared/dtos/previewDTO";
import { PreviewItem } from "./PreviewItem";

interface Props {
  previews: PreviewDTO[]
}

export function PreviewsList({ previews }: Props) {
  return (
    <ul className="grid grid-cols-3 gap-2">
      {previews.map(preview => (
        <PreviewItem {...preview} />
      ))}
    </ul>
  )
}
