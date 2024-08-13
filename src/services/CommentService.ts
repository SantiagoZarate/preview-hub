import { CommentServerSchemaType } from "@/lib/zod-validation/comment";
import { CommentRepository } from "../repositories/CommentRepository";

export class CommentService {

  constructor(private _commentRepository: CommentRepository) { }

  async create(data: CommentServerSchemaType) {
    const result = await this._commentRepository.create({
      content: data.content,
      preview_id: data.previewId
    })

    return result;
  }
}