import Image from 'next/image'
import styles from '@/styles/Home.module.css'
export default function Header() {
return (
<>
<header>
      <div className={styles.container}>
        <div className={styles.innerheader}>
          <div className={styles.leftsection}>
            <div className={styles.logosection}>
              <h1>GlobalTalk</h1>
            </div>
            <div className={styles.menuheader}>
              <ul className={styles.menunav}>
                <li>Home</li>
                <li>Textbook</li>
                <li>Statistics</li>
                <li>Games <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.812134 0.608887L4.27431 4.07126L7.73668 0.608887" stroke="#757575" stroke-width="1.6"/>
                </svg>
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
                  <span className={styles.username2}>A</span>Alex
                </li>
                <li className={styles.signoutbtn}>SignOut →</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
</>
)
}