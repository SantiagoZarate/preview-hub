import { RawProject } from './supabase.types'

export type ProjectSelect = RawProject["id"]
export type ProjectDelete = RawProject["id"]
export type ProjectInsert = Pick<RawProject, "description" | "created_by" | "name">