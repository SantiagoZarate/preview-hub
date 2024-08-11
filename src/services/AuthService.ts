import { SignInSchemaType, SignUpSchemaType } from "@/lib/zod-validation/auth";
import { createClient } from "../utils/supabase/server";

export class AuthService {

  async signUp({ email, password, username }: SignUpSchemaType) {
    const db = await createClient()

    const { data, error } = await db.auth.signUp({
      email,
      password,
      options: {
        data: {
          username
        }
      }
    })

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async signInWithPassword({ password, email }: SignInSchemaType) {
    const db = await createClient()

    const { data, error } = await db.auth.signInWithPassword({
      password,
      email
    })

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

}