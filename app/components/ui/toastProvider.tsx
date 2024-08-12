"use client"

import { PropsWithChildren } from "react"
import { Toaster } from "./toaster"

export function ToastProvider({ children }: PropsWithChildren) {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}