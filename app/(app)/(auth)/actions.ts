"use server"

import { signInSchema, signUpSchema } from '@/lib/zod-validation/auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createServerAction, ZSAError } from 'zsa'
import { ServiceLocator } from '../../../src/services/serviceLocator'

export const signUp = createServerAction()
  .input(signUpSchema)
  .handler(async ({ input }) => {
    const authService = ServiceLocator.getService("authService")

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
    const authService = ServiceLocator.getService("authService")

    try {
      await authService.signInWithPassword(input)
    } catch (error) {
      throw new ZSAError("ERROR", error)
    }

    revalidatePath("/", "layout")
    redirect("/")
  })