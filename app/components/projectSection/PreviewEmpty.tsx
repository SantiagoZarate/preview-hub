import { InfoIcon } from "../icons/InfoIcon"
import { Text } from "../ui/text"

export function PreviewEmpty() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center bg-secondary border border-dotted rounded-lg border-primary p-4">
      <Text>
        This projects doesnt have any preview to show,
        go ahead and upload one!
      </Text>
      <InfoIcon className="size-16" />
    </div>
  )
}
