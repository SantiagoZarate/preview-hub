import { z } from 'zod'

const envsSchema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_KEY: z.string()
})

export const envs = envsSchema.parse({
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY!
})
