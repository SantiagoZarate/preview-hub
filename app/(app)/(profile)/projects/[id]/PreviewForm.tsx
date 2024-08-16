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
import { useState } from "react"
import { useServerAction } from "zsa-react"
import { useParams } from "next/navigation"
import { toast } from "@/components/ui/use-toast"
import { uploadFile } from "@/lib/upload-file"
import { createPreview } from "./actions"
import { Spinner } from "@/components/loader/spinner"

export function PreviewForm() {
  const { ID } = useParams()
  const [uploadMediaIsPending, setUploadMediaIsPending] = useState(false)
  const [videoPreview, setVideoPreview] = useState<File | undefined>(undefined)
  const form = useForm<PreviewClientType>({
    resolver: zodResolver(previewSchema),
    defaultValues: {
      title: "",
      description: "",
      media: undefined
    }
  })

  const { execute } = useServerAction(createPreview, {
    onError: ({ err }) => {
      toast({ title: "Error while uploading preview", description: err.message })
    },
    onSuccess: () => {
      toast({ title: "Preview uploaded succesfully" })
    },
    onFinish: () => {
      setUploadMediaIsPending(false)
    }
  })

  const onSubmit = async ({ description, media, title }: PreviewClientType) => {
    console.log(videoPreview);

    setUploadMediaIsPending(true)
    const previewStorageName = `preview-${title}`

    try {
      const mediaURL = await uploadFile(videoPreview!, previewStorageName)
      execute({
        description,
        media: mediaURL,
        title: title,
        project_id: ID as string
      })
    } catch (e) {
      toast({ title: "Error while uploading preview" })
    }
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
              <figure className="relative aspect-square max-h-24 rounded-md overflow-hidden">
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
        <Button disabled={uploadMediaIsPending} type="submit">
          {
            uploadMediaIsPending ? <Spinner /> : "Submit"
          }
        </Button>
      </form>
    </Form>
  )
}
