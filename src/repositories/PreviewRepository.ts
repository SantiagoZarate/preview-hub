import { error } from "console";
import { PreviewDTO, previewSchemaDTO } from "../shared/dtos/previewDTO";
import { PreviewMediaDTO, previewMediaSchemaDTO } from "../shared/dtos/previewMediaDTO";
import { PreviewDelete, PreviewInsert, PreviewSelect } from "../types/preview";
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

  async getById(id: PreviewSelect): Promise<PreviewMediaDTO> {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*, media(*)")
      .eq("id", id)
      .single()

    if (error) {
      console.log(error)
      throw new Error(error.message)
    }

    console.log(data)
    return previewMediaSchemaDTO.parse(data)
  }

  async getByUser(userID: string): Promise<PreviewDTO[]> {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*")
      .eq("created_by", userID)

    if (error) {
      throw new Error(error.message)
    }

    return data.map(d => previewSchemaDTO.parse(d))
  }

  async deleteById(id: PreviewDelete) {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .delete()
      .eq("id", id)
      .select("*")
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return previewSchemaDTO.parse(data)
  }
}