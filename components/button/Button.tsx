'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Button.module.css'
import { usePathname } from 'next/navigation'

type ButtonProps = {
  label: string
  href?: string
  otherClasses?: string
  onClick?: () => void
}

export default function Button({ label, href, otherClasses, onClick }: ButtonProps) {
  const path = usePathname()

  return href 
    ? 
  (
    <Link href={href ?? ''} 
      className={
        `hover:bg-slate-300 hover:text-slate-700 text-slate-300 
        ${otherClasses} ${styles.button} ${(path === href ) && 'active'}`
      }
    >
      {label}
    </Link>
  ) 
    : 
  (
    <button className={`${styles.button} ${otherClasses}`} onClick={onClick}>
      {label}
    </button>
  )
}
