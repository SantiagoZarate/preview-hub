import { PreviewUserMediaDTO, previewUserMediaSchemaDTO } from "../shared/dtos/previewUserMediaDTO";
import { PreviewDelete, PreviewInsert, PreviewSelect } from "../types/preview";
import { PreviewDTO, previewSchemaDTO } from "../shared/dtos/previewDTO";
import { createClient } from "../utils/supabase/server";

export class PreviewRepository {
  private _tableName: string

  constructor() {
    this._tableName = "preview"
  }

  async create(newPreview: PreviewInsert) {
    const db = createClient()

    const { data, error } = await db.rpc("insert_preview", {
      _title: newPreview.title,
      _description: newPreview.description,
      _media: newPreview.media,
      _project_id: newPreview.project_id
    })

    if (error) {
      console.log(error)
      throw new Error(error.message)
    }

    return data
  }

  async getById(id: PreviewSelect): Promise<PreviewUserMediaDTO> {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*, media(*), users(*)")
      .eq("id", id)
      .single()

    if (error) {
      console.log(error)
      throw new Error(error.message)
    }

    console.log(data)
    return previewUserMediaSchemaDTO.parse(data)
  }

  async getByProject(projectID: string): Promise<PreviewDTO[]> {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*")
      .eq("project_id", projectID)

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