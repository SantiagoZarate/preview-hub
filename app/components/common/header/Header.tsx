import { LinkButton } from "@/components/ui/LinkButton";
import { ServiceLocator } from "../../../../src/services/serviceLocator";

export async function Header() {
  const authService = ServiceLocator.getService("authService")
  const user = await authService.getUser()

  return (
    <header className="w-full px-8 fixed top-0 z-50 bg-background">
      <div className="mx-auto max-w-screen-xl justify-between items-center border-b border-border flex py-2">
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
              <LinkButton variant={"outline"} href={`/${user.user_metadata.username!}`}>
                {user.user_metadata.username!}
              </LinkButton>
              :
              <LinkButton variant={"outline"} href="/login">
                sign in
              </LinkButton>
          }
        </section>
      </div>
    </header>
  )
}
