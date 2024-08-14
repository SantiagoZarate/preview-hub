import { createClient } from "../../src/utils/supabase/client"

export async function uploadFile(file: File, name: string): Promise<string> {
  const supabase = createClient()

  await supabase.storage.from("preview-hub").upload(name, file, {
    cacheControl: "3600",
    upsert: true
  })

  const { data: { publicUrl } } = await supabase.storage.from("preview-hub").getPublicUrl(name)

  return publicUrl
}