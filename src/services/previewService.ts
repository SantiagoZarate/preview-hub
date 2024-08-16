import { PreviewServerType } from "@/lib/zod-validation/preview";
import { PreviewRepository } from "../repositories/PreviewRepository";
import { PreviewDelete, PreviewSelect } from "../types/preview";

export class PreviewService {

  constructor(private _previewRepository: PreviewRepository) { }

  async create(data: PreviewServerType) {
    const results = await this._previewRepository.create({
      description: data.description,
      title: data.title,
      media: data.media,
      project_id: data.project_id
    })

    return results
  }

  async getOne(id: PreviewSelect) {
    const result = await this._previewRepository.getById(id);
    return result
  }

  async delete(id: PreviewDelete) {
    const result = await this._previewRepository.delete(id);
    return result;
  }
}