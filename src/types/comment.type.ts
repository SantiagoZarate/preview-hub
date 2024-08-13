import { RawComment } from './supabase.types'

export type CommentSelect = RawComment["id"]
export type CommentDelete = RawComment["id"]
export type CommentInsert = Pick<RawComment, "content" | "preview_id">
