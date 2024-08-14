import { MediaServerSchema } from "@/lib/zod-validation/media";
import { MediaRepository } from "../repositories/MediaRepository";
import { MediaDelete } from "../types/media.type";

export class MediaService {
  constructor(private _mediaRepository: MediaRepository) { }

  async create(data: MediaServerSchema) {
    const result = await this._mediaRepository.create(data)
    return result;
  }

  async delete(id: MediaDelete) {
    const result = await this._mediaRepository.delete(id)
    return result;
  }
}