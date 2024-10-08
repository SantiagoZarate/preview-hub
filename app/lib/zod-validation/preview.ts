import { z } from 'zod'
import { mediaSchema, mediaServerSchema } from './media'

export const previewSchema = z.object({
  title: z.string()
    .min(3, { message: 'Preview name must at least be 3 characters length.' })
    .max(50, { message: 'Preview name must at least be 3 characters length.' }),
  description: z.string(),
})

export const previewClientSchema = previewSchema.extend({
  media: mediaSchema.nullable()
})

export const previewServerSchema = previewSchema.extend({
  media: z.string(),
  project_id: z.string()
})

export type PreviewClientType = z.infer<typeof previewClientSchema>
export type PreviewServerType = z.infer<typeof previewServerSchema>