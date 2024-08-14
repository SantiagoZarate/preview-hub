import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { List } from "@/components/ui/List"
import { ServiceLocator } from "@service/serviceLocator"
import { CommentForm } from "./CommentForm"
import { MediaAside } from "./MediaAside"
import { MediaItem } from "./MediaItem"
import { PreviewHeader } from "./PreviewHeader"

interface Props {
  params: {
    ID: string
  }
}

export default async function PreviewPage({ params: { ID } }: Props) {
  const previewService = ServiceLocator.getService("previewService")
  const preview = await previewService.getOne(ID)

  return (
    <section className="w-full flex flex-col gap-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/projects/${preview.project_id}`}>{preview.project.name}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{preview.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PreviewHeader
        created_at={preview.created_at}
        title={preview.title}
        user={preview.project.user} />
      <section className="grid grid-cols-5 gap-4">
        <section className="col-span-4 flex flex-col gap-8">
          <figure className="relative aspect-video min-h-52 rounded-md overflow-hidden border border-border">
            <video className="z-10 w-full h-full" controls src={preview.media[0].url}></video>
            <div className="absolute bg-secondary h-full w-full" />
          </figure>
          <p>
            {preview.description}
          </p>
          <section className="flex flex-col">
            <header>
              comments
            </header>
            <CommentForm />
          </section>
        </section>
        <MediaAside>
          <List>
            {
              preview.media.map((media, index) => (
                <MediaItem
                  numberOfVersion={index + 1}
                  key={media.id}
                  media={media}
                />
              ))
            }
          </List>
        </MediaAside>
      </section>
    </section>
  )
}
