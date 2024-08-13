import { z } from 'zod'

export const projectFormSchema = z.object({
  name: z.string(),
  description: z.string()
})

export type ProjectSchemaType = z.infer<typeof projectFormSchema>