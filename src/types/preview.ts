import { RawMedia, type RawPreview } from './supabase.types'

export type PreviewSelect = RawPreview["id"]
export type PreviewDelete = RawPreview["id"]
export type PreviewInsert = Pick<RawPreview, "created_by" | "description" | "title"> & {
  media: RawMedia["url"]
} 