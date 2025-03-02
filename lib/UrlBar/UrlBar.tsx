'use client'

import { usePathname } from 'next/navigation'
import { navigate } from './actions'

import { useState, useEffect } from 'react';

import styles from './UrlBar.module.css'

function UrlBar({baseURL} : {baseURL: string}) {
  const pathname = usePathname().toLowerCase();
  const [firstRender, setFirstRender] = useState(true)
  const [inputURL, setInputURL] = useState(baseURL)

  useEffect(() => {
    setInputURL(baseURL + pathname);
  }, [pathname])

  useEffect(() => {
    setFirstRender(false)
  }, [])

  return(
    <form action={navigate}>
      <input
      className={`${styles.urlInput} font-semibold`}
      readOnly={firstRender}
      name='url'
      value={firstRender? "fetching page...": inputURL}
      onChange={(e) => setInputURL((e.target.value).toLowerCase())}
      />
    </form>
  )
}

export default UrlBar