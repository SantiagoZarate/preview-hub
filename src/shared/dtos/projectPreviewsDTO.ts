import { z } from 'zod'
import { projectSchemaDTO } from './projectDTO'
import { previewSchemaDTO } from './previewDTO'

export const projectPreviewsSchemaDTO = projectSchemaDTO.extend({
  previews: z.array(previewSchemaDTO)
})

export type ProjectPreviewsDTO = z.infer<typeof projectPreviewsSchemaDTO>