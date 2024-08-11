import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuthService } from "../../../../src/services/AuthService";

export async function Header() {
  const authService = new AuthService()
  const user = await authService.getUser()

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
          {
            user
              ?
              <Link href={`/${user.user_metadata.username}`}>
                <Button variant={"outline"}>
                  {user.user_metadata.username}
                </Button>
              </Link>
              :
              <Link href={"/login"}>
                <Button variant={"outline"}>
                  sign in
                </Button>
              </Link>
          }
        </section>
      </div>
    </header>
  )
}
