import { CommentServerSchemaType } from "@/lib/zod-validation/comment";
import { CommentRepository } from "../repositories/CommentRepository";
import { ServiceLocator } from "./serviceLocator";
import { CommentDelete } from "../types/comment.type";

export class CommentService {

  constructor(private _commentRepository: CommentRepository) { }

  async create(data: CommentServerSchemaType) {
    const authService = ServiceLocator.getService("authService")
    const user = await authService.getUser()

    const result = await this._commentRepository.create({
      content: data.content,
      project_id: data.project_id,
      author: user?.id!
    })

    return result;
  }

  async delete(id: CommentDelete) {
    const result = await this._commentRepository.delete(id)
    return result
  }
}