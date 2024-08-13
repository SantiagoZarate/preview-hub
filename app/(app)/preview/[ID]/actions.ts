"use server"

import { commentServerSchema } from '@/lib/zod-validation/comment'
import { ServiceLocator } from '@service/serviceLocator'
import { createServerAction } from 'zsa'

export const createComment = createServerAction()
  .input(commentServerSchema)
  .handler(async ({ input }) => {
    // const commentService = ServiceLocator.getService("commentService")

  })
