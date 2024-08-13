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
import { projectFormSchema, ProjectSchemaType } from "@/lib/zod-validation/project"
import { useServerAction } from "zsa-react"
import { createProject } from "./actions"
import { toast } from "@/components/ui/use-toast"

export default function CreatePreviewPage() {
  const form = useForm<ProjectSchemaType>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      description: "",
    }
  })

  const { execute, isPending } = useServerAction(createProject, {
    onError: ({ err }) => {
      toast({ title: "There was an error!", description: err.message })
    }
  })

  const onSubmit = async (data: ProjectSchemaType) => {
    execute(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preview name</FormLabel>
              <FormControl>
                <Input placeholder="Work in progress..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preview description</FormLabel>
              <FormControl>
                <Input placeholder="Work in progress..." {...field} />
              </FormControl>
              <FormDescription>
                A brief preview description.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit">Submit</Button>
      </form>
    </Form >
  )
}
