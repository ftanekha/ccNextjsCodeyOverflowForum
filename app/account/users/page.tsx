'use client'
import { USERS, User } from '../../../data/userData'
import Button from '../../../components/button/Button'
import { usePathname } from 'next/navigation'

function Page() {
  const path = usePathname()

  return (
    <>
      <h1 className='my-4 text-slate-300'>All Users</h1>
      <ul>
        {
          USERS.map(
            (user: User) => (
              <li key={user.id}>
                <Button
                  href={`${path}/${user.id}`}
                  label={`User ID: ${user.id}`}
                  otherClasses='px-2'
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