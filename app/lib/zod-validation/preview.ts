import { z } from 'zod'

export const previewSchema = z.object({
  title: z.string()
    .min(3, { message: 'Preview name must at least be 3 characters length.' })
    .max(50, { message: 'Preview name must at least be 3 characters length.' }),
  description: z.string(),
})

export const previewClientSchema = previewSchema.extend({
  media: z.instanceof(File)
    .refine(media => media.size <= 1024 * 1024 * 50, { message: 'Media must be less than 50mb' }).nullable()
  // .transform(files => files.item(0)!)
})

export const previewServerSchema = previewSchema.extend({
  media: z.string()
})

export type PreviewClientType = z.infer<typeof previewClientSchema>
export type PreviewServerType = z.infer<typeof previewServerSchema>