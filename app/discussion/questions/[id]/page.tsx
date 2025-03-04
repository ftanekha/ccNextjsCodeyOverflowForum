'use client'
import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import {
  fetchPostById,
  fetchCommentsByPostId,
  Post,
  Comment,
} from '../../../../lib/utils'

function QuestionsPage(
  { params }: { params: { id: string } }
) {
  const { id } = params
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
      <h1>{question?.title}</h1>
      <p>{question?.body}</p>
      <div>
        <h2>Comments</h2>
        {
          comments.length > 0 
            ? 
          (
            <ul>
              {
                comments.map(
                  comment => (
                    <li key={comment.id}>
                      <strong>{comment.name}</strong>{comment.email}
                      <p>{comment.body}</p>
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