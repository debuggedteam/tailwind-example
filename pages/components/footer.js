import Image from 'next/image'
import styles from '@/styles/Home.module.css'
export default function Footer() {
return (
<>
    <footer className={styles.bottomsection}>
      <div className={styles.container}>
      <div className={styles.innerheader}>
          <div className={styles.leftsection}>
     
            <div className={styles.menuheader}>
              <ul className={styles.footersection}>
                <li>Home</li>
                <li>Textbook</li>
                <li>Statistics</li>
                <li>Sprint</li>
                <li>Audio-call</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightsection}>
            <div className={styles.logoutsection}>
            <ul className={styles.menunav}>
                <li>Alex</li>
                <li>Gabriel</li>
                <li>Marcus</li>
              </ul>
            </div>
          </div>
        </div>
        
         <div className={styles.footerText}>
        <div className={styles.footerimg}>
          <div><Image src="/img/img4.png" alt="Vercel Logo" width={30} height={24} priority /></div>           
            <div><Image src="/img/gt.png" alt="Vercel Logo" width={30} height={24} priority /></div>          
           <div className={styles.icon}><Image src="/img/youtube.png" alt="Vercel Logo" width={25} height={17} priority /></div>
            </div>
            <div className={styles.copyright}>
            <p>©2021 GlobalTalk. Project for GlobalTalk.</p>
            </div>
            </div>

      

      </div>
    </footer>
</>
)
}