import { MediaDelete, MediaInsert } from "../types/media.type";
import { createClient } from "../utils/supabase/server";

export class MediaRepository {
  private _tableName: string = "media"

  async create(newMedia: MediaInsert) {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .insert(newMedia)
      .select("*")
      .single()

    if (error) {
      throw new Error("Error creating a new media record")
    }

    return data
  }

  async delete(id: MediaDelete) {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .delete()
      .eq("id", id)
      .select("*")
      .single()

    if (error) {
      throw new Error("Error creating a new media record")
    }

    return data
  }
}