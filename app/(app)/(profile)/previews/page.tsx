import { PhotoMiniIcon } from "@/components/icons/PhotoMiniIcon";
import { UpRightArrowMicroIcon } from "@/components/icons/UpRightArrowMicroIcon";
import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@/components/ui/buttonLink";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { ServiceLocator } from "@service/serviceLocator";
import Link from "next/link";
import { DeletePreviewButton } from "./DeletePreviewButton";
import { ShareLinkButton } from "./ShareLinkButton";

export default async function PreviewsPage() {
  const previewService = ServiceLocator.getService("previewService")
  const previews = await previewService.getByUser()

  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col gap-2 p-4 bg-secondary border-dotted border-border border rounded-lg">
        <Text intent={"title"}>
          Previews
        </Text>
        <Text>
          Share your work in progress with customer to get feedback from them
        </Text>
        <Link className="w-fit" href={"/previews/create"}>
          <Button className="">
            Add new preview
          </Button>
        </Link>
      </header>
      <section className="flex flex-col gap-4">
        <header className="flex items-center divide-x">
          <span className="pr-2">
            <PhotoMiniIcon />
          </span>
          <Text className="pl-2">Your previews</Text>
        </header>
        <Table>
          <TableCaption>A list of your previews.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              previews.map((preview, index) => (
                <TableRow key={preview.id}>
                  <TableCell className="font-medium">{preview.title}</TableCell>
                  <TableCell>{
                    preview.is_active
                      ?
                      <p className="bg-green-400 text-green-700 w-fit rounded-md px-2">Active</p>
                      :
                      <p className="bg-gray-200 text-gray-500 w-fit rounded-md px-2">Inactive</p>
                  }
                  </TableCell>
                  <TableCell>{preview.description}</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <ShareLinkButton id={preview.id} />
                    <DeletePreviewButton id={preview.id} />
                    <Link href={`/preview/${preview.id}`}>
                      <ButtonIcon variant={"ghost"} icon={<UpRightArrowMicroIcon />}>
                        Go
                      </ButtonIcon>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>

      </section>
    </section>
  )
}