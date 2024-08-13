import { z } from 'zod'
import { RawProject } from '../../types/supabase.types'

export const projectSchemaDTO = z.object({
  id: z.string(),
  name: z.string(),
  created_by: z.string(),
  created_at: z.string(),
  description: z.string(),
  is_active: z.boolean(),
}) satisfies z.ZodSchema<RawProject>

export type ProjectDTO = z.infer<typeof projectSchemaDTO>
