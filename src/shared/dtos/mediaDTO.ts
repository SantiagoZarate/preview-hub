import { z } from 'zod'

export const mediaSchemaDTO = z.object({
  created_at: z.string(),
  id: z.coerce.number(),
  preview_id: z.string(),
  url: z.string().url()
})

export type MediaDTO = z.infer<typeof mediaSchemaDTO>