import { z } from 'zod'

export const mediaSchema = z.instanceof(File)
  .refine(media => media.size <= 1024 * 1024 * 50, { message: 'Media must be less than 50mb' })

export const mediaFormSchema = z.object({
  media: mediaSchema
})

export type MediaFormSchemaType = z.infer<typeof mediaFormSchema>

export const mediaServerSchema = z.object({
  url: z.string(),
  preview_id: z.string()
})

export type MediaServerSchema = z.infer<typeof mediaServerSchema>