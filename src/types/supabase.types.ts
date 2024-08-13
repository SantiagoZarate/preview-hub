import { type Tables } from '../../supabase/database.types'

export type RawPreview = Tables<"preview">
export type RawComment = Tables<"comment">
export type RawMedia = Tables<"media">
export type RawUser = Tables<"users">
export type RawProject = Tables<"project">
export type RawObservation = Tables<"observation">