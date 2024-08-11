"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signInSchema, SignInSchemaType } from "@/lib/zod-validation/auth"
import { useServerAction } from 'zsa-react'
import { login } from "../actions"
import { Text } from "@/components/ui/text"
import Link from "next/link"
import { Toaster } from "@/components/ui/toaster"
import { toast, useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const { toast } = useToast()

  const { execute, isPending } = useServerAction(login, {
    onError: ({ err }) => {
      toast({
        title: "Error while login in",
        description: err.message
      })
    }
  })

  const onSubmit = (data: SignInSchemaType) => {
    console.log("LOGIN IN")
    execute(data)
  }

  return (
    <>
      <Toaster />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="leomessi@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit">Submit</Button>
        </form>
      </Form>
      <footer>
        <Text>
          you dont have an account? <Link className="underline" href={"/signup"}>sign up!</Link>
        </Text>
      </footer>
    </>
  )
}
