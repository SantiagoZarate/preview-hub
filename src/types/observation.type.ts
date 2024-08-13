import { RawObservation } from './supabase.types'

export type ObservationSelect = RawObservation["id"]
export type ObservationDelete = RawObservation["id"]
export type ObservationInsert = Pick<RawObservation, "at_timestamp" | "content" | "media_id">