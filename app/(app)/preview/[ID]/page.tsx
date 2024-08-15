import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { List } from "@/components/ui/List"
import { Section, SectionSeparator } from "@/components/ui/section"
import { ServiceLocator } from "@service/serviceLocator"
import { MediaAside } from "./MediaAside"
import { MediaItem } from "./MediaItem"
import { PreviewHeader } from "./PreviewHeader"
import Link from "next/link"
import { getMediaVersionFromParam } from "@/lib/getMediaVersionFromParam"

interface Props {
  params: {
    ID: string
  },
  searchParams: {
    [key: string]: string | undefined
  }
}

export default async function PreviewPage({ params: { ID }, searchParams }: Props) {
  const previewService = ServiceLocator.getService("previewService")
  const preview = await previewService.getOne(ID)

  const mediaVersion = getMediaVersionFromParam(searchParams["version"], preview.media.length)

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
            <video className="z-10 w-full h-full" controls src={preview.media[Number(mediaVersion) - 1].url}></video>
            <div className="absolute bg-secondary h-full w-full" />
          </figure>
          <p>
            {preview.description}
          </p>
          <Section className="flex flex-col gap-4">
            <SectionSeparator>
              Observations
            </SectionSeparator>
            <div>
              {/* TODO */}
            </div>
          </Section>
        </section>
        <MediaAside>
          <List>
            {
              preview.media.map((media, index) => (
                <Link
                  href={`/preview/${ID}?version=${index + 1}`}
                  key={media.id}
                >
                  <MediaItem
                    numberOfVersion={index + 1}
                    media={media}
                  />
                </Link>
              ))
            }
          </List>
        </MediaAside>
      </section>
    </section>
  )
}
