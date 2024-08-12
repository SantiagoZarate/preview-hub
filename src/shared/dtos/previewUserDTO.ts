import { z } from 'zod'
import { previewSchemaDTO } from './previewDTO'
import { userSchemaDTO } from './userDTO'

export const previewUserSchemaDTO = previewSchemaDTO.extend({
  users: userSchemaDTO
})

export type PreviewUserDTO = z.infer<typeof previewUserSchemaDTO>