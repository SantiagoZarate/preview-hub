"use server"

import { redirect } from 'next/navigation'
import { createServerAction, ZSAError } from 'zsa'
import { ServiceLocator } from '../../../../../src/services/serviceLocator'
import { projectFormSchema } from '@/lib/zod-validation/project'

export const createProject = createServerAction()
  .input(projectFormSchema)
  .handler(async ({ input }) => {
    const projectService = ServiceLocator.getService("projectService")
    let projectID;

    try {
      projectID = await projectService.create(input)
    } catch (error) {
      throw new ZSAError("ERROR", error)
    }

    redirect(`/projects/${projectID}`)
  })