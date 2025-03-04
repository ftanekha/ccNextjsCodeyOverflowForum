'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { capitalize, fetchPostByTopic, Post } from '../../../../lib/utils'

function Topic(){
    const [topicPosts, setTopicPosts] = useState<Post[]>([])

    const topicId = usePathname()
    const topicIdArr = topicId.split('/')
    const currentPath = topicIdArr[topicIdArr.length - 1]

    useEffect(
        () => {
            fetchPostByTopic(currentPath.toLowerCase())
            .then(
                fetchedPosts => setTopicPosts(fetchedPosts)
            )
        }, [topicId]
    )
    
    return (
        <div>
            <h1 className='mt-6 mb-4 text-slate-500 text-md font-extrabold'>{capitalize(currentPath)}</h1>
            <ul>
                {
                    topicPosts.map(
                        (post, index)=> {
                            return (
                                <li key={post.id}>
                                    <span className='pr-2 text-xs text-slate-600 font-black'>{index}</span>
                                    <span className=' text-slate-400 font-light text-xs'>{capitalize(post.title)}</span>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default Topic