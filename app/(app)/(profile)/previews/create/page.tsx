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
import { createClient } from "../../../../../src/utils/supabase/client"
import { useServerAction } from "zsa-react"
import { createPreview } from "./actions"
import { useState } from "react"

export default function CreatePreviewPage() {
  const [videoPreview, setVideoPreview] = useState<File | undefined>(undefined)
  const form = useForm<PreviewClientType>({
    resolver: zodResolver(previewSchema),
    defaultValues: {
      title: "",
      description: "",
      media: undefined
    }
  })

  const { execute, isPending } = useServerAction(createPreview)

  const onSubmit = async ({ description, media, title }: PreviewClientType) => {
    const storage = createClient()
    const previewStorageName = `preview-${title}`

    await storage.storage.from("preview-hub").upload(previewStorageName, videoPreview!, {
      cacheControl: "3600",
      upsert: true
    })

    const { data: { publicUrl } } = await storage.storage.from("preview-hub").getPublicUrl(previewStorageName)

    execute({
      description,
      media: publicUrl,
      title
    })
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
        <FormField
          control={form.control}
          name="media"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Media files</FormLabel>
              <FormControl>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.currentTarget.files![0]
                    setVideoPreview(file)
                    form.setValue("media", file)
                  }} />
              </FormControl>
              <figure className="relative aspect-video min-h-52 rounded-md overflow-hidden">
                {
                  videoPreview &&
                  <video
                    controls
                    className="absolute z-10 w-full h-full"
                    src={URL.createObjectURL(videoPreview!)}></video>
                }
                <div className="w-full h-full bg-secondary" />
              </figure>
              <Button
                disabled={form.watch("media") === undefined}
                type="button"
                onClick={() => form.resetField("media")}>
                clear
              </Button>
              <FormDescription>
                This are your media files.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit">Submit</Button>
      </form>
    </Form>
  )
}
