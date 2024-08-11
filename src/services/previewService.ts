import { PreviewServerType } from "@/lib/zod-validation/preview";
import { PreviewRepository } from "../repositories/PreviewRepository";
import { PreviewSelect } from "../types/preview";

export class PreviewService {

  constructor(private _previewRepository: PreviewRepository) { }

  async create(data: PreviewServerType) {
    // GET USER SESSION ID

    const results = await this._previewRepository.create({
      created_by: "userid",
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