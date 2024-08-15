import { UpRightArrowMicroIcon } from "@/components/icons/UpRightArrowMicroIcon";
import { ButtonIcon } from "@/components/ui/buttonLink";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { ProjectDTO } from "../../../src/shared/dtos/projectDTO";
import { DeletePreviewButton } from "../../(app)/(profile)/projects/DeletePreviewButton";
import { ShareLinkButton } from "../../(app)/(profile)/projects/ShareLinkButton";

interface Props {
  projects: ProjectDTO[]
}

export function ProjectsTable({ projects }: Props) {
  return (
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
          projects.map((preview, index) => (
            <TableRow key={preview.id}>
              <TableCell className="font-medium">{preview.name}</TableCell>
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
                <Link href={`/projects/${preview.id}`}>
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
  )
}
