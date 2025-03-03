import Post from '../../../components/post/Post'
import { POSTS, Post as PostType } from '../../../data/postData'

function Page() {
  return (
    <>
      <h1>Questions</h1>
      <ul>
        {POSTS.map((post: PostType) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Page