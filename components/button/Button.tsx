import React from 'react'
import Link from 'next/link'
import styles from './Button.module.css'

type ButtonProps = {
  label: string
  href?: string
  background?: string
  onClick?: () => void
}

export default function Button({ label, href, background, onClick }: ButtonProps) {
  return href ? (
    <Link href={href ?? ''} className={`${styles.button} ${background} hover:bg-slate-300`}>
      {label}
    </Link>
  ) : (
    <button className={`${styles.button} ${background} hover:bg-slate-300`} onClick={onClick}>
      {label}
    </button>
  )
}
