import { signInSchema, signUpSchema } from '@/lib/zod-validation/auth'
import { createServerAction, ZSAError } from 'zsa'
import { AuthService } from '../../../src/services/AuthService'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export const signUp = createServerAction()
  .input(signUpSchema)
  .handler(async ({ input }) => {
    const authService = new AuthService()

    try {
      authService.signUp(input)
    } catch (error) {
      throw new ZSAError("ERROR", error)
    }

    revalidatePath("/", "layout")
    redirect("/")
  })

export const login = createServerAction()
  .input(signInSchema)
  .handler(async ({ input }) => {
    const authService = new AuthService()

    try {
      authService.signInWithPassword(input)
    } catch (error) {
      throw new ZSAError("ERROR", error)
    }

    revalidatePath("/", "layout")
    redirect("/")
  })