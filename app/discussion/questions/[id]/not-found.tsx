'use client'
import { redirect } from 'next/navigation'

function ErrorBoundary(){
  setTimeout(
    redirect, 5000, '/'
  )

  return <h1 className='p-8 text-pink-500 font-semibold'>Sorry, This Question does not exist!</h1>
}
  
export default ErrorBoundary