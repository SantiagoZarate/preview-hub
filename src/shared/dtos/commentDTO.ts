import { z } from 'zod'

export const commentSchemaDTO = z.object({
  content: z.string(),
  created_at: z.string(),
  id: z.string(),
  project_id: z.string()
})

export type CommentDTO = z.infer<typeof commentSchemaDTO>