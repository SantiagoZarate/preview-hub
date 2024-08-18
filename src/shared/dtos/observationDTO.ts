import { z } from 'zod'
import { RawObservation } from '../../types/supabase.types'

export const observationSchemaDTO = z.object({
  at_timestamp: z.coerce.number(),
  content: z.string(),
  created_at: z.string(),
  id: z.string(),
  media_id: z.string()
})

export type ObservationDTO = z.infer<typeof observationSchemaDTO>