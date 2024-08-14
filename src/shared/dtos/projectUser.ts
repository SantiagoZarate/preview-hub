import { z } from 'zod'
import { projectSchemaDTO } from './projectDTO'
import { userSchemaDTO } from './userDTO'

export const projectUserSchemaDTO = projectSchemaDTO.extend({
  user: userSchemaDTO
})

export type ProjectUserDTO = z.infer<typeof projectSchemaDTO>