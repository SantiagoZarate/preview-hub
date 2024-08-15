import { NavLink } from "./NavLink";
import { SignOutButton } from "./SignOutButton";

export function AsideMenu() {
  return (
    <aside className="h-full border-r border-border flex flex-col justify-between py-4 px-2">
      <NavLink />
      <SignOutButton />
    </aside>
  )
}
