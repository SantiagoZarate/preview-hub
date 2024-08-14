import { RawMedia } from './supabase.types'

export type MediaInsert = Pick<RawMedia, "url" | "preview_id">
export type MediaDelete = RawMedia["id"]