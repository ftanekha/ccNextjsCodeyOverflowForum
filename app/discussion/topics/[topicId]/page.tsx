'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Button from '../../../../components/button/Button'
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
            <h1>{capitalize(currentPath)}</h1>
            <ul>
                {
                    topicPosts.map(
                        (post) => (
                            <li key={post.id}>
                                <Button
                                    href={`/questions/${post.id}`}
                                    label={post.title}
                                />
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default Topic