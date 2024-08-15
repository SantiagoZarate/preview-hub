import { Spinner } from "@/components/loader/spinner";

export function ProjectsLoader() {
  return (
    <div className="flex gap-4 items-center justify-center p-4 w-full bg-secondary border border-border rounded-lg">
      <span>
        <Spinner />
      </span>
      Loading projects...
    </div>
  )
}
