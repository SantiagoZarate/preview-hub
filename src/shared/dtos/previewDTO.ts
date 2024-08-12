import { z } from 'zod'

export const previewSchemaDTO = z.object({
  created_at: z.string(),
  created_by: z.string(),
  description: z.string(),
  id: z.string(),
  is_active: z.boolean(),
  title: z.string(),
})

export type PreviewDTO = z.infer<typeof previewSchemaDTO>