"use server"

import { previewServerSchema } from '@/lib/zod-validation/preview'
import { createServerAction, ZSAError } from 'zsa'
import { PreviewService } from '../../../../../src/services/previewService'
import { PreviewRepository } from '../../../../../src/repositories/PreviewRepository'
import { redirect } from 'next/navigation'

export const createPreview = createServerAction()
  .input(previewServerSchema)
  .handler(async ({ input }) => {
    const previewService = new PreviewService(new PreviewRepository())
    let previewID;

    try {
      previewID = await previewService.create(input)
    } catch (error) {
      throw new ZSAError("ERROR", error)
    }

    redirect(`/preview/${previewID}`)
  })