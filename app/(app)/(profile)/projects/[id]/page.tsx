import { Text } from "@/components/ui/text"
import { ServiceLocator } from "@service/serviceLocator"

interface Props {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params: { id } }: Props) {
  const projectService = ServiceLocator.getService("projectService")
  const project = await projectService.getById(id)

  return (
    <section>
      <header>
        <Text>
          {project.name}
        </Text>
        <Text>
          {project.description}
        </Text>
      </header>
    </section>
  )
}