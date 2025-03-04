import Post from '../../../components/post/Post'
import { POSTS, Post as PostType } from '../../../data/postData'

function Page() {
  return (
    <>
      <h2 className='my-4 text-slate-500 font-extrabold'>Questions</h2>
      <ul>
        {
          POSTS.map(
            (post: PostType) => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            )
          )
        }
      </ul>
    </>
  )
}

export default Page