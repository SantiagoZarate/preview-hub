import { SignOutMiniIcon } from "@/components/icons/SignOutMiniIcon";
import { ButtonIcon } from "@/components/ui/buttonLink";
import { ServiceLocator } from "@service/serviceLocator";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export function SignOutButton() {
  const signout = async () => {
    "use server"
    console.log("SIGNINT OUT");

    const authService = ServiceLocator.getService("authService")
    await authService.signOut()

    revalidatePath("/", "layout")
    redirect("/")
  }

  return (
    <form className="flex" action={signout}>
      <ButtonIcon icon={<SignOutMiniIcon />}>
        sign out
      </ButtonIcon>
    </form>
  )
}
