import { PreviewEmpty } from "@/components/projectSection/PreviewEmpty"
import { PreviewsList } from "@/components/projectSection/PreviewsList"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Text } from "@/components/ui/text"
import { ServiceLocator } from "@service/serviceLocator"
import { PreviewForm } from "./PreviewForm"

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
            </DialogHeader>
            <PreviewForm />
          </DialogContent>
        </Dialog>
      </section>
      {
        project.previews.length
          ? <PreviewsList previews={project.previews} />
          : <PreviewEmpty />
      }
    </section>
  )
}