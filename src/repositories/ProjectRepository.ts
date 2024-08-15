import { ProjectCommentsPreviewsDTO, projectCommentsPreviewsSchemaDTO } from "../shared/dtos/projectCommentsPreviewsDTO";
import { ProjectDTO, projectSchemaDTO } from "../shared/dtos/projectDTO";
import { ProjectPreviewsDTO, projectPreviewsSchemaDTO } from "../shared/dtos/projectPreviewsDTO";
import { ProjectInsert, ProjectSelect } from "../types/project.type";
import { createClient } from "../utils/supabase/server";

export class ProjectRepository {
  private _tableName: string = "project";

  async create(newProject: ProjectInsert) {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .insert(newProject)
      .select("*")
      .single()

    if (error) {
      throw new Error("Error creating a new project")
    }

    return data;
  }

  async getAll() {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*")
      .single()

    if (error) {
      throw new Error("Error creating a new project")
    }

    return data;
  }

  async getById(id: ProjectSelect): Promise<ProjectCommentsPreviewsDTO> {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*, previews:preview(*), comments:comment(*)")
      .eq("id", id)
      .single()

    if (error) {
      throw new Error("Error getting project")
    }

    return projectCommentsPreviewsSchemaDTO.parse(data);
  }

  async getByUser(userID: string): Promise<ProjectDTO[]> {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*")
      .eq("created_by", userID)

    if (error) {
      throw new Error("Error creating a new project")
    }

    return data.map(d => projectSchemaDTO.parse(d));
  }
}