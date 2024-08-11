import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const signUpSchema = signInSchema.extend({
  username: z.string()
})

export type SignInSchemaType = z.infer<typeof signInSchema>
export type SignUpSchemaType = z.infer<typeof signUpSchema>