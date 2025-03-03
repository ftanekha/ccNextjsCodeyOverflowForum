'use client'

import { usePathname } from 'next/navigation'
import Button from '../button/Button'
import styles from './Nav.module.css'

function Nav() {
  const pathname = "REPLACE ME"

  return (
    <nav>
      <ul className={styles.navUl}>
        <li>
          <Button label="Home" href="/" />
        </li>
        <li>
          <Button label="About" href="/info/about" />
        </li>
        <li>
          <Button label="Topics" href="/discussion/topics" />
        </li>
        <li>
          <Button label="All Questions" href="/discussion/questions" />
        </li>
        <li>
          <Button label="All Users" href="/account/users" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav