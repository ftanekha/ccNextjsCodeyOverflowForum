'use client'
import { useRouter } from 'next/navigation'

function ErrorBoundary(){
  const {back} = useRouter()
  setTimeout(back, 5000)

  return <h1 className='p-8 text-pink-500 font-semibold'>Sorry, this User does not exist!</h1>
}
  
export default ErrorBoundary