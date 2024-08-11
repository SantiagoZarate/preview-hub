import { RawMedia, type RawPreview } from './supabase.types'

export type PreviewInsert = Pick<RawPreview, "created_by" | "description" | "title"> & {
  media: Array<RawMedia["id"]>
} 