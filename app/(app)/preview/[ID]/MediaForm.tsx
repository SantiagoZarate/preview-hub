"use client"

import { PictureIcon } from '@/components/icons/PictureIcon'
import { Button } from '@/components/ui/button'
import { Form, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Text } from '@/components/ui/text'
import { toast } from '@/components/ui/use-toast'
import { uploadFile } from '@/lib/upload-file'
import { mediaFormSchema, MediaFormSchemaType } from '@/lib/zod-validation/media'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useServerAction } from 'zsa-react'
import { createMedia } from './actions'

export default function MediaForm() {
  const { id } = useParams()
  const form = useForm<MediaFormSchemaType>({
    resolver: zodResolver(mediaFormSchema),
    defaultValues: {
      media: undefined
    }
  })

  const { execute, isPending } = useServerAction(createMedia)

  const handleSubmit = async (data: MediaFormSchemaType) => {
    console.log(data)
    // const mediaName = `${new Date()}-media`
    // let mediaURL;

    // try {
    //   mediaURL = await uploadFile(data.media, mediaName)
    //   execute({ preview_id: id as string, url: mediaURL })
    // } catch (error) {
    //   toast({ title: "Error uploading file", description: "Try again in a few seconds" })
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-4'>
        <FormItem className='flex flex-col gap-2'>
          <Text intent={"title"}>
            File
          </Text>
          <FormLabel htmlFor='media' className='w-full h-20 border bg-secondary border-border justify-center items-center rounded-xl flex flex-col hover:-translate-y-1 transition'>
            <PictureIcon />
            <Text>Upload local file</Text>
          </FormLabel>
          <input
            hidden
            id='media'
            type='file'
            name='media'
            onChange={(e) => {
              const file = e.currentTarget.files![0]
              form.setValue("media", file)
            }} />
          <FormDescription>
            File must be lower than 50mb
          </FormDescription>
          <FormMessage />
        </FormItem>
        <Button className='w-fit self-end' disabled={isPending}>
          Upload!
        </Button>
      </form>
    </Form >
  )
}