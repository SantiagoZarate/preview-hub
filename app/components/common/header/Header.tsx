import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full px-8 fixed top-0">
      <div className="mx-auto max-w-screen-xl justify-between items-center border-b border-border flex">
        <section className="flex gap-4">
          <p className="font-bold">
            Preview Hub
          </p>
          <nav>
            links go here
          </nav>
        </section>
        <section>
          <Link href={"/login"}>
            <Button variant={"outline"}>
              sign in
            </Button>
          </Link>
        </section>
      </div>
    </header>
  )
}
