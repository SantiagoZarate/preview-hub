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
import { PreviewClientType, previewSchema } from "@/lib/zod-validation/preview"

export default function CreatePreviewPage() {
  const form = useForm<PreviewClientType>({
    resolver: zodResolver(previewSchema),
    defaultValues: {
      title: ""
    }
  })

  const onSubmit = (data: PreviewClientType) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
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
          name="media"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Media files</FormLabel>
              <FormControl>
                <Input type="file" accept="mp4" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This are your media files.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
