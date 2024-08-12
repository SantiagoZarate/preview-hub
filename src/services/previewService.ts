import { PreviewServerType } from "@/lib/zod-validation/preview";
import { PreviewRepository } from "../repositories/PreviewRepository";
import { PreviewSelect } from "../types/preview";
import { AuthService } from "./AuthService";

export class PreviewService {

  constructor(private _previewRepository: PreviewRepository) { }

  async create(data: PreviewServerType) {
    const authService = new AuthService()
    const user = await authService.getUser()

    const results = await this._previewRepository.create({
      created_by: user?.id!,
      description: data.description,
      title: data.title,
      media: data.media
    })

    return results
  }

  async getOne(id: PreviewSelect) {
    const result = await this._previewRepository.getById(id);
    return result
  }
}