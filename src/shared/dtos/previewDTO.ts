import { z } from 'zod'
import { RawPreview } from '../../types/supabase.types'

export const previewSchemaDTO = z.object({
  created_at: z.string(),
  description: z.string(),
  id: z.string(),
  title: z.string(),
  project_id: z.string()
})

export type PreviewDTO = z.infer<typeof previewSchemaDTO>