import { CommentInsert } from "../types/comment.type";
import { createClient } from "../utils/supabase/server";

export class CommentRepository {
  private _tableName: string = "comment"

  async create(newComment: CommentInsert) {
    const db = await createClient()

    const { data, error } = await db.from(this._tableName)
      .insert(newComment)
      .select("*")
      .single()

    if (error) {
      throw new Error("Error creating a new comment")
    }

    return data;
  }

}