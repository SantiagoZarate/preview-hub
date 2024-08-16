"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CommentFormSchemaType, commentFormSchema } from "@/lib/zod-validation/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useServerAction } from "zsa-react";
import { createComment } from "./actions";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export function CommentForm() {
  const { ID } = useParams()!
  const form = useForm<CommentFormSchemaType>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      content: ""
    }
  })

  const { execute, isPending } = useServerAction(createComment, {
    onError: ({ err }) => {
      toast({ title: "Oops there was an error", description: "Your comment couldn't be posted" })
    },
    onSuccess: () => {
      toast({ title: "Comment posted succesfully" })
      form.reset()
    }
  })

  const handleSubmit = (data: CommentFormSchemaType) => {
    execute({
      ...data,
      project_id: ID as string
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col w-full">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormDescription>
                Add a new comment
              </FormDescription>
              <FormControl>
                <textarea className="w-full bg-secondary rounded-md border border-border p-1" placeholder="this is looking fire!" {...field}></textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="self-end w-fit" disabled={isPending}>
          Send
        </Button>
      </form>
    </Form>
  )
}
