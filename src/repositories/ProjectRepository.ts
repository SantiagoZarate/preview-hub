import { ProjectDTO, projectSchemaDTO } from "../shared/dtos/projectDTO";
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
      console.log(error);

      throw new Error("Error creating a new project")
    }

    console.log(data)
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

  async getById(id: ProjectSelect) {
    const db = await createClient()

    const { data, error } = await db
      .from(this._tableName)
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      throw new Error("Error creating a new project")
    }

    return projectSchemaDTO.parse(data);
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