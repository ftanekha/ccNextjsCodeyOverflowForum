import React from 'react'
import styles from './Post.module.css'
import { capitalize } from '../../lib/utils'

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
        <h2 className={`${styles.title} text-slate-400 text-sm`}>{capitalize(title)}</h2>
      </a>
      <p className='mb-2 text-sm text-slate-200'>{body}</p>
      <small className={styles.info}>
        <a href={`/account/users/${userId}`} >
          User: {userId}
        </a>
      </small>
    </div>
  )
}

export default Post