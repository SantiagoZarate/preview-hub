import { PhotoMiniIcon } from "@/components/icons/PhotoMiniIcon";
import { ProjectManager } from "@/components/projectSection/ProjectManager";
import { ProjectsLoader } from "@/components/projectSection/ProjectsLoader";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProjectsPage() {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col gap-2 p-4 bg-secondary border-dotted border-border border rounded-lg">
        <Text intent={"title"}>
          Projects
        </Text>
        <Text>
          Share your work in progress with customer to get feedback from them
        </Text>
        <Link className="w-fit" href={"/projects/create"}>
          <Button className="">
            Create a new project
          </Button>
        </Link>
      </header>
      <Section>
        <header className="flex items-center divide-x">
          <span className="pr-2">
            <PhotoMiniIcon />
          </span>
          <Text className="pl-2">Your projects</Text>
        </header>
        <Suspense fallback={<ProjectsLoader />}>
          <ProjectManager />
        </Suspense>
      </Section>
    </section>
  )
}