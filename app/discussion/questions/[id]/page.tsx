'use client'
import React, { useEffect, useState, use } from 'react'
import { notFound } from 'next/navigation'
import {
  fetchPostById,
  fetchCommentsByPostId,
  Post,
  Comment,
  capitalize
} from '../../../../lib/utils'

function QuestionsPage(
  { params }: { params: Promise<{id?: string}>}
){
  const { id } = use(params)
    
  const [question, setQuestion] = useState<Post | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    () => {
      const postId = parseInt(id, 10)

      const fetchData = async () => {
        try{
          const fetchedQuestion = await fetchPostById(postId)
          if(!fetchedQuestion) return notFound()
          setQuestion(fetchedQuestion)

          const fetchedComments = await fetchCommentsByPostId(postId)
          setComments(fetchedComments)
        }catch(error){
          console.error(error)
        }finally{
          setIsLoading(false)
        }
      }
      fetchData()
    }, [id]
  )

  if(isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1 className='pt-4 px-2 text-xs text-slate-200 bg-black opacity-80'>{question?.title}</h1>
      <p className='pb-4 px-2 font-black text-xs text-slate-400 bg-black opacity-50'>{question?.body}</p>
      <div>
        <h2 className='my-4 text-slate-300'>Comments</h2>
        {
          comments.length > 0 
            ? 
          (
            <ul>
              {
                comments.map(
                  comment => (
                    <li key={comment.id} className='text-sm'>
                      <strong className='text-xs text-slate-200'>{comment.name}</strong> {comment.email}
                      <p className='text-xs text-slate-400'>{capitalize(comment.body)}</p>
                    </li>
                  )
                )
              }
            </ul>
          ) 
            : 
          notFound()
        }
      </div>
    </div>
  )
}

export default QuestionsPage