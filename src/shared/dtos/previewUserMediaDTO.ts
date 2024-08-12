import { mediaSchemaDTO } from './mediaDTO'
import { z } from 'zod'
import { previewUserSchemaDTO } from './previewUserDTO'

export const previewUserMediaSchemaDTO = previewUserSchemaDTO.extend({
  media: z.array(mediaSchemaDTO)
})

export type PreviewUserMediaDTO = z.infer<typeof previewUserMediaSchemaDTO>