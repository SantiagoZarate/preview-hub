"use server"

import { commentServerSchema } from '@/lib/zod-validation/comment'
import { mediaServerSchema } from '@/lib/zod-validation/media'
import { ServiceLocator } from '@service/serviceLocator'
import { revalidatePath } from 'next/cache'
import { createServerAction, ZSAError } from 'zsa'

export const createComment = createServerAction()
  .input(commentServerSchema)
  .handler(async ({ input }) => {
    // const commentService = ServiceLocator.getService("commentService")
  })

export const createMedia = createServerAction()
  .input(mediaServerSchema)
  .handler(async ({ input }) => {
    const mediaService = ServiceLocator.getService("mediaService")

    try {
      await mediaService.create(input)
    } catch (error) {
      throw new ZSAError("ERROR", error)
    }

    revalidatePath(`/preview/${input.preview_id}`, "page")
  })
