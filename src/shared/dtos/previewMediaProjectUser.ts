import { z } from 'zod'
import { previewMediaSchemaDTO } from './previewMediaDTO'
import { projectUserSchemaDTO } from './projectUser'

export const previewMediaProjectUserSchemaDTO = previewMediaSchemaDTO.extend({
  project: projectUserSchemaDTO
})

export type PreviewMediaProjectUserDTO = z.infer<typeof previewMediaProjectUserSchemaDTO>