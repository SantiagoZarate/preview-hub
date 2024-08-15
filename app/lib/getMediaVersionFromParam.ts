export function getMediaVersionFromParam(param: string | undefined, mediaLength: number) {
  const mediaNumber = Number(param ?? 1)

  if (mediaNumber <= 1) return 1

  if (mediaNumber > mediaLength) return mediaLength

  return mediaNumber
}