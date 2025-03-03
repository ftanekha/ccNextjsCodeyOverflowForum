'use client'

import { USERS, User } from '../../../data/userData'
import Button from '../../../components/button/Button'
import { usePathname } from 'next/navigation'

function Page() {
  const path = usePathname()

  return (
    <>
      <h1>All Users</h1>
      <ul>
        {
          USERS.map(
            (user: User) => (
              <li key={user.id}>
                <Button
                  href={`${path}/${user.id}`}
                  label={`User ID: ${user.id}`}
                />
              </li>
            )
          )
        }
      </ul>
    </>
  )
}

export default Page