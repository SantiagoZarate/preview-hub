import { ProjectSchemaType } from "@/lib/zod-validation/project";
import { ProjectRepository } from "../repositories/ProjectRepository";
import { ServiceLocator } from "./serviceLocator";
import { ProjectDelete, ProjectSelect } from "../types/project.type";

export class ProjectService {

  constructor(private _projectRepository: ProjectRepository) { }

  async getAll() {
    const results = await this._projectRepository.getAll()
    return results
  }

  async create(data: ProjectSchemaType) {
    const authService = ServiceLocator.getService("authService")
    const user = await authService.getUser()

    const result = await this._projectRepository.create({
      created_by: user?.id!,
      description: data.description,
      name: data.name
    })

    return result.id
  }

  async getByUser() {
    const authService = ServiceLocator.getService("authService")
    const user = await authService.getUser()

    const results = await this._projectRepository.getByUser(user?.id!);
    return results
  }

  async getById(id: ProjectSelect) {
    const results = await this._projectRepository.getById(id);
    return results
  }

  async delete(id: ProjectDelete) {
    const results = await this._projectRepository.delete(id);
    return results
  }
}
