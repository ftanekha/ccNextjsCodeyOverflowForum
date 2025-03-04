'use client'

import Button from '../button/Button'
import styles from './Nav.module.css'

function Nav() {
  return (
    <nav>
      <ul className={styles.navUl}>
        <li>
          <Button label="Home" href="/" otherClasses='py-3 px-4 hover:bg-slate-300 hover:text-slate-700'/>
        </li>
        <li>
          <Button label="About" href="/info/about" otherClasses='py-3 px-4 hover:bg-slate-300 hover:text-slate-700'/>
        </li>
        <li>
          <Button label="Topics" href="/discussion/topics" otherClasses='py-3 px-4 hover:bg-slate-300 hover:text-slate-700'/>
        </li>
        <li>
          <Button label="All Questions" href="/discussion/questions" otherClasses='py-3 px-4 hover:bg-slate-300 hover:text-slate-700'/>
        </li>
        <li>
          <Button label="All Users" href="/account/users" otherClasses='py-3 px-4 hover:bg-slate-300 hover:text-slate-700'/>
        </li>
      </ul>
    </nav>
  );
}

export default Nav