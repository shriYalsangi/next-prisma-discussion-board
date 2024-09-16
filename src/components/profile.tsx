'use client'

import { useSession } from "next-auth/react"

export default function Profile() {
  const session = useSession()

  if (session.data?.user) {
    return <div>From client: user {JSON.stringify(session.data.user)} signed in</div>
  }

  return <div>From client: user signed out</div>
}