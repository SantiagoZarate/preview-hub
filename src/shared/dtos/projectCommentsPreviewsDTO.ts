import { z } from 'zod'
import { projectPreviewsSchemaDTO } from './projectPreviewsDTO'
import { commentSchemaDTO } from './commentDTO'

export const projectCommentsPreviewsSchemaDTO = projectPreviewsSchemaDTO.extend({
  comments: z.array(commentSchemaDTO)
})

export type ProjectCommentsPreviewsDTO = z.infer<typeof projectCommentsPreviewsSchemaDTO>