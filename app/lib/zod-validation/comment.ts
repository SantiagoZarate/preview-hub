import { z } from "zod"

export const commentFormSchema = z.object({
  content: z.string()
})

export type CommentFormSchemaType = z.infer<typeof commentFormSchema>

export const commentServerSchema = commentFormSchema.extend({
  project_id: z.string()
})

export type CommentServerSchemaType = z.infer<typeof commentServerSchema>