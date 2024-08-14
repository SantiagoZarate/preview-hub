import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { List } from "@/components/ui/List"
import { Text } from "@/components/ui/text"
import { ServiceLocator } from "@service/serviceLocator"
import moment from 'moment'
import { CommentForm } from "./CommentForm"
import { MediaAside } from "./MediaAside"
import { MediaItem } from "./MediaItem"

interface Props {
  params: {
    ID: string
  }
}

export default async function PreviewPage({ params: { ID } }: Props) {
  const previewService = ServiceLocator.getService("previewService")
  const preview = await previewService.getOne(ID)

  return (
    <section className="grid grid-cols-5 w-full py-4">
      <section className="col-span-4 flex flex-col gap-8">
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
        <header className="flex flex-col gap-4">
          <h2 className="text-xl">{preview.title}</h2>
          <footer className="flex gap-2 items-center">
            <picture className="size-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://tr.rbxcdn.com/df237818cd40a44d68825e02da235fae/420/420/Hat/Webp"
                alt="profile picture" />
            </picture>
            <div className="flex flex-col gap-1">
              <p>{moment(preview.created_at).fromNow()}</p>
              <Text>{preview.project.user.username}</Text>
            </div>
          </footer>
        </header>
        <figure className="relative aspect-video min-h-52 rounded-md overflow-hidden">
          <video className="w-full h-full" controls src={preview.media[0].url}></video>
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
  )
}
