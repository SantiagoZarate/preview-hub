import { z } from 'zod'

export const previewSchema = z.object({
  name: z.string()
    .min(3, { message: 'Preview name must at least be 3 characters length.' })
    .max(50, { message: 'Preview name must at least be 3 characters length.' }),
  media: z.array(
    z.instanceof(File)
      .refine(media => media.size <= 1024 * 1024 * 50, { message: 'Media must be less than 50mb' }))
    .min(1, { message: 'Add at least some media' })
})