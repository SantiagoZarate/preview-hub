import { z } from 'zod'

export const userSchemaDTO = z.object({
  id: z.string(),
  username: z.string()
})

export type UserDTO = z.infer<typeof userSchemaDTO>