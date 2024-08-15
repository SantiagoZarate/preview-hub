import { ServiceLocator } from "@service/serviceLocator"
import { ProjectsTable } from "./ProjectsTable"

export async function ProjectManager() {
  await new Promise((res) => setTimeout(() => res(""), 5000))
  const projectService = ServiceLocator.getService("projectService")
  const projects = await projectService.getByUser()

  return projects.length
    ? <ProjectsTable projects={projects} />
    : <div>There is no project yet</div>
}
