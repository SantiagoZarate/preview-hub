import { z } from "zod"
import { mediaSchemaDTO } from "./mediaDTO"
import { previewSchemaDTO } from "./previewDTO"

export const previewMediaSchemaDTO = previewSchemaDTO.extend({
  media: z.array(mediaSchemaDTO.omit({
    preview_id: true
  }))
})

export type PreviewMediaDTO = z.infer<typeof previewMediaSchemaDTO>