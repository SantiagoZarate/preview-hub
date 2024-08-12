"use server"

import { createServerAction, ZSAError } from 'zsa'
import { z } from 'zod'
import { ServiceLocator } from '@service/serviceLocator'
import { revalidatePath } from 'next/cache'

export const deletePreview = createServerAction()
  .input(z.object({
    id: z.string()
  }))
  .handler(async ({ input }) => {
    const previewService = ServiceLocator.getService("previewService")
    let preview;

    try {
      preview = previewService.deleteOne(input.id)
    } catch (error) {
      throw new ZSAError("ERROR", error)
    }

    revalidatePath("/previews", "page")
  })