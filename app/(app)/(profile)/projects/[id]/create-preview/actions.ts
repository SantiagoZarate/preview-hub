"use server"

import { previewServerSchema } from '@/lib/zod-validation/preview'
import { ServiceLocator } from '@service/serviceLocator'
import { redirect } from 'next/navigation'
import { createServerAction, ZSAError } from 'zsa'

export const createPreview = createServerAction()
  .input(previewServerSchema)
  .handler(async ({ input }) => {
    const previewService = ServiceLocator.getService("previewService")
    let previewID;

    try {
      previewID = await previewService.create(input)
    } catch (error) {
      throw new ZSAError("ERROR", error)
    }

    redirect(`/preview/${previewID}`)
  })