import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ServiceLocator } from "@service/serviceLocator"
import { Badge } from "@/components/ui/badge"
import { Text } from "@/components/ui/text"
import PreviewForm from "./PreviewForm"
import Link from "next/link"
import moment from "moment"

interface Props {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params: { id } }: Props) {
  const projectService = ServiceLocator.getService("projectService")
  const project = await projectService.getById(id)

  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <Text intent={"title"}>
          {project.name}
        </Text>
        <Text>
          {project.description}
        </Text>
      </header>
      <section>
        <Dialog>
          <DialogTrigger>
            <Badge>
              Add new preview
            </Badge>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a new preview</DialogTitle>
              <PreviewForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </section>
      <section>
        {
          project.previews.length
            ?
            <ul>
              {project.previews.map(preview => (
                <li className="" key={preview.id}>
                  <Link className="rounded-lg flex flex-col" href={`/preview/${preview.id}`}>
                    <Text>{preview.title}</Text>
                    <Text intent={"detail"}>{moment(preview.created_at).fromNow()}</Text>
                  </Link>
                </li>
              ))}
            </ul>
            :
            <div className="bg-secondary border border-dotted rounded-lg border-primary p-4">
              <Text>
                This projects doesnt have any preview to show,
                go ahead and upload one!
              </Text>
            </div>
        }
      </section>
    </section>
  )
}