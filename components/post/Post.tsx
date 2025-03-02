import React from 'react'
import styles from './Post.module.css'

type PostProps = {
  post: {
    userId: number
    id: number
    title: string
    body: string
  }
}

function Post(
  { post: { userId, id, title, body } }: PostProps
) {
  return (
    <div className={styles.container}>
      <a href={`/discussion/questions/${id}`} >
        <h2 className={styles.title}>{title}</h2>
      </a>
      <p>{body}</p>
      <small className={styles.info}>
        <a href={`/account/users/${userId}`} >
          User: {userId}
        </a>
      </small>
    </div>
  )
}

export default Post