// Profile page should show some recent works

import Link from "next/link"


interface Props {
  params: {
    user: string
  }
}

export default function ProfilePage({ params: { user } }: Props) {
  return (
    <section>
      <header>
        Profile page
      </header>
      <Link href={`/profile/${user}/create`}>
        Add new preview
      </Link>
      <section>

      </section>
    </section>
  )
}