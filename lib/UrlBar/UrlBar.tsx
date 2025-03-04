'use client'

import { usePathname } from 'next/navigation'
import { navigate } from './actions'

import { useState, useEffect } from 'react';

import styles from './UrlBar.module.css'

function UrlBar({baseURL} : {baseURL: string}) {
  const pathname = usePathname().toLowerCase();
  const [firstRender, setFirstRender] = useState(true)
  const [inputURL, setInputURL] = useState(baseURL)

  useEffect(
    ()=> setInputURL(baseURL + pathname), [pathname]
  )

  useEffect(
    ()=> setFirstRender(false), []
  )

  function handleChange({target: {value}}){
    setInputURL(value.toLowerCase())
  }

  return(
    <form action={navigate}  className='mt-16'>
      <input
        className={ `${styles.urlInput} font-mono` }
        readOnly={firstRender}
        name='url'
        value={ firstRender ? "fetching page..." : inputURL }
        onChange={handleChange}
      />
    </form>
  )
}

export default UrlBar