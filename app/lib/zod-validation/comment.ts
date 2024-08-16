import { z } from "zod"

export const commentFormSchema = z.object({
  content: z.string()
    .min(1, "Cannot send empty comment")
    .max(140, "Comment length must be less than 140 characters")
})

export type CommentFormSchemaType = z.infer<typeof commentFormSchema>

export const commentServerSchema = commentFormSchema.extend({
  project_id: z.string(),
})

export type CommentServerSchemaType = z.infer<typeof commentServerSchema>