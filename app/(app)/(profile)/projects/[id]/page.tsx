import { CommentForm } from "@/(app)/preview/[ID]/CommentForm"
import { Comment } from "@/components/comment/Comment"
import { PreviewEmpty } from "@/components/projectSection/PreviewEmpty"
import { PreviewsList } from "@/components/projectSection/PreviewsList"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { List } from "@/components/ui/List"
import { Section, SectionSeparator } from "@/components/ui/section"
import { Text } from "@/components/ui/text"
import { ServiceLocator } from "@service/serviceLocator"
import { PreviewForm } from "./PreviewForm"

interface Props {
  params: {
    ID: string
  }
}

export default async function ProjectPage({ params: { ID } }: Props) {
  const projectService = ServiceLocator.getService("projectService")
  const project = await projectService.getById(ID)

  return (
    <section className="flex flex-col gap-8">
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
      <Section>
        <SectionSeparator>Previews</SectionSeparator>
        {
          project.previews.length
            ? <PreviewsList previews={project.previews} />
            : <PreviewEmpty />
        }
      </Section>
      <Section>
        <SectionSeparator>comments</SectionSeparator>
        <CommentForm />
        <List gap={"off"}>
          {
            project.comments.map(comment => (
              <Comment
                key={comment.id}
                comment={comment} />
            ))
          }
        </List>
      </Section>
    </section>
  )
}