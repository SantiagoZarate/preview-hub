"use client"

import { PictureIcon } from '@/components/icons/PictureIcon'
import { Spinner } from '@/components/loader/spinner'
import { Button } from '@/components/ui/button'
import { Form, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Text } from '@/components/ui/text'
import { toast } from '@/components/ui/use-toast'
import { mediaFormSchema, MediaFormSchemaType } from '@/lib/zod-validation/media'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useServerAction } from 'zsa-react'
import { createMedia } from './actions'
import { uploadFile } from '@/lib/upload-file'
import { useState } from 'react'

export default function MediaForm() {
  const { ID } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<MediaFormSchemaType>({
    resolver: zodResolver(mediaFormSchema),
    defaultValues: {
      media: undefined
    }
  })

  const { execute } = useServerAction(createMedia, {
    onError: ({ err }) => {
      toast({ title: "Error uploading file", description: err.message })
    },
    onSuccess: () => {
      toast({ title: "File uploaded succesfully" })
    },
    onFinish: () => {
      setIsLoading(false)
    }
  })

  const handleSubmit = async (data: MediaFormSchemaType) => {
    setIsLoading(true)
    console.log(data);

    const mediaName = `${new Date()}-media`
    let mediaURL;

    try {
      mediaURL = await uploadFile(data.media, mediaName)
      execute({ preview_id: ID as string, url: mediaURL })
    } catch (error) {
      toast({ title: "Error uploading file", description: "Try again in a few seconds" })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-4'>
        <FormItem className='flex flex-col gap-2'>
          <Text intent={"title"}>
            File
          </Text>
          <FormLabel htmlFor='media' className='relative w-full h-20 border bg-secondary border-border justify-center items-center rounded-xl flex flex-col hover:-translate-y-1 transition overflow-hidden'>
            <div className='z-10 flex flex-col items-center gap-1'>
              <PictureIcon />
              <Text>Upload local file</Text>
            </div>
            {
              form.watch("media") &&
              <img
                className='absolute inset-0 object-cover bg-red-200 blur-sm'
                src={URL.createObjectURL(form.watch("media"))}
                alt="" />
            }
          </FormLabel>
          <input
            hidden
            id='media'
            type='file'
            name='media'
            accept=".mp4,video/mp4"
            onChange={(e) => {
              const file = e.currentTarget.files![0]
              form.setValue("media", file)
            }} />
          <FormDescription>
            File must be lower than 50mb
          </FormDescription>
          <FormMessage />
        </FormItem>
        <Button className='w-fit self-end' disabled={isLoading}>
          {isLoading ? <Spinner /> : "Upload!"}
        </Button>
      </form>
    </Form >
  )
}