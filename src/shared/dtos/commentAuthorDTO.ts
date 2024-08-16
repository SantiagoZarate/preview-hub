import { z } from 'zod'
import { commentSchemaDTO } from './commentDTO'
import { userSchemaDTO } from './userDTO'

export const commentAuthorSchemaDTO = commentSchemaDTO.extend({
  author: userSchemaDTO
})

export type CommentAuthorDTO = z.infer<typeof commentAuthorSchemaDTO>