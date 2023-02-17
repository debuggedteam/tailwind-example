import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
export default function Header() {
return (
<>
<header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.innerheader}>
          <div className={styles.leftsection}>
            <div className={styles.logosection}>
              <h1><Link href="/">GlobalTalk</Link></h1>
            </div>
            <div className={styles.menuheader}>
              <ul className={styles.menunav}>
                <li>
                <Link href="/">Home</Link>              
                </li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/">Statistics</Link></li>
                <li className={styles.haschild}>
                <Link href="/">Games <svg width="9" height="6" viewBox="0 0 9 6" fill="Currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.812134 0.608887L4.27431 4.07126L7.73668 0.608887" stroke="Currentcolor" stroke-width="1.6"/>
                </svg>
                </Link>
                <ul className={styles.submenu}>
                <li>
                <Link href="/">Sprint →</Link>              
                </li>
                <li><Link href="/">Audio-call →</Link></li>     
                </ul>
                </li>
              </ul>
              <div className={styles.menuline}>
              </div>

            </div>
          </div>
          <div className={styles.rightsection}>
            <div className={styles.logoutsection}>
              <ul>
                <li className={styles.username1}>
                  <span className={styles.username2}><Link href="/">A</Link></span><Link href="/">Alex</Link>
                </li>
                <li className={styles.signoutbtn}><Link href="/">SignOut →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
</>
)
}