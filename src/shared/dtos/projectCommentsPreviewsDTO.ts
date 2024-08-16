import { z } from 'zod'
import { projectPreviewsSchemaDTO } from './projectPreviewsDTO'
import { commentSchemaDTO } from './commentDTO'
import { commentAuthorSchemaDTO } from './commentAuthorDTO'

export const projectCommentsPreviewsSchemaDTO = projectPreviewsSchemaDTO.extend({
  comments: z.array(commentAuthorSchemaDTO)
})

export type ProjectCommentsPreviewsDTO = z.infer<typeof projectCommentsPreviewsSchemaDTO>