import { z } from 'zod'

const envsSchema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_KEY: z.string()
})

export const envs = envsSchema.parse({
  SUPABASE_URL: process.env.SUPABASE_URL!,
  SUPABASE_KEY: process.env.SUPABASE_KEY!
})
