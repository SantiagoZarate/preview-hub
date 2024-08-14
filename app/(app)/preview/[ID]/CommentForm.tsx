"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CommentFormSchemaType, commentFormSchema } from "@/lib/zod-validation/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useServerAction } from "zsa-react";
import { createComment } from "./actions";

export function CommentForm() {
  const { ID } = useParams()!
  const form = useForm<CommentFormSchemaType>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      content: ""
    }
  })

  const { execute, isPending } = useServerAction(createComment)

  const handleSubmit = (data: CommentFormSchemaType) => {
    execute({
      ...data,
      previewId: ID as string
    })
  }

  return (
    <Form {...form}>
      <form action="" className="flex w-full">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <textarea className="w-full bg-secondary rounded-md border border-border p-1" placeholder="this is looking fire!" {...field}></textarea>
              </FormControl>
              <FormDescription>
                Add a new comment
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
