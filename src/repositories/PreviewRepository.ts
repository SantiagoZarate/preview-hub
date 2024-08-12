import { PreviewInsert, PreviewSelect } from "../types/preview";
import { createClient } from "../utils/supabase/server";

export class PreviewRepository {
  private _tableName: string

  constructor() {
    this._tableName = "preview"
  }

  async create(newPreview: PreviewInsert) {
    const db = await createClient()

    const { data, error } = await db.rpc("insert_preview", {
      _title: newPreview.title,
      _description: newPreview.description,
      _media: newPreview.media,
      _author: newPreview.created_by
    })

    if (error) {
      console.log(error)
      throw new Error(error.message)
    }

    return data
  }

  async getById(id: PreviewSelect) {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*")
      .eq("id", id)

    if (error) {
      throw new Error(error.message)
    }

    return data
  }
}