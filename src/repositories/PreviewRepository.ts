import { PreviewInsert } from "../types/preview";
import { createClient } from "../utils/supabase/server";

export class PreviewRepository {
  private _tableName: string

  constructor() {
    this._tableName = "preview"
  }

  async create(newPreview: PreviewInsert) {
    const db = await createClient()

    const { data, error } = await db.from(this._tableName).insert({
      "description": newPreview.description,
      "created_by": newPreview.created_by,
      "title": newPreview.title,
    })
      .select("*")
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return data
  }
}