import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-5">
      <section className="col-span-3">
      </section>
      <section className="col-span-2">
        {children}
      </section>
    </div>
  )
}