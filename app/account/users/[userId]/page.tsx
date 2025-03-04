'use client'
import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { fetchUserData, fetchUserPosts, User, Post } from '../../../../lib/utils'

function UserPage(
  { params }: { params: { userId: string } }
){
  let { userId } = React.use(params)
  
  const [user, setUser] = useState<User | null>(null)
  const [userPosts, setUserPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    ()=> {
      const userIdNumber = parseInt(userId, 10)

      const fetchData = async () => {
        try{
          const fetchedUser = await fetchUserData(userIdNumber)
          if(!fetchedUser) throw new Error('Invalid user ID')

          const fetchedUserPosts = await fetchUserPosts(userIdNumber)

          setUser(fetchedUser)
          setUserPosts(fetchedUserPosts)
        }catch(error){
          console.error(error)
        }finally{
          setIsLoading(false)
        }
      }

      fetchData()
    }, [userId]
  )

  if(isLoading) return <div>Loading user data...</div>

  if(!user) return notFound()

  return (
    <>
      <h1 className='mt-4 text-slate-400 text-sm'>Username: {user.username}</h1>
      <h2 className='mb-4 text-slate-400 text-sm'>Company: {user.company.name}</h2>
      <div>
        <h3 className='my-4 text-slate-500 text-sm'>User's Posts:</h3>
        <ul>
          {
            userPosts.map(
              (post, index) => {
                return (
                  <li key={post.id} className='text-xs text-slate-600 font-black'>
                    <span className='pr-2 text-xs text-slate-600 font-black'>{index}</span>
                    <span className=' text-slate-400 font-light text-xs'>{post.title}</span>
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    </>
  )
}

export default UserPage