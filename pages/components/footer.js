import Image from 'next/image'
import Link from 'next/link';
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
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Textbook</Link></li>
                <li><Link href="/">Statistics</Link></li>
                <li><Link href="/">Sprint</Link></li>
                <li><Link href="/">Audio-call</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.rightsection}>
            <div className={styles.logoutsection}>
            <ul className={styles.menunav}>
                <li><Link href="/">Alex</Link></li>
                <li><Link href="/">Gabriel</Link></li>
                <li><Link href="/">Marcus</Link></li>
              </ul>
            </div>
          </div>
        </div>
         <div className={styles.footerText}>
         <div className={styles.footerimg}>
         <div className={styles.imgfooter}>
           <Link href="/"><Image src="/img/img4.png" alt="Vercel Logo" width={24} height={19} priority /></Link>
           </div>           
            <div>
            <Link href="/"><Image src="/img/gt.png" alt="Vercel Logo" width={27} height={18} priority /></Link>
            </div>          
            <div className={styles.icon}>
            <Link href="/"><Image src="/img/youtube.png" alt="Vercel Logo" width={25} height={17} priority /></Link>
            </div>
            </div>
            <div className={styles.copyright}>
            <p>©2023 <Link href="/"><strong>GlobalTalk</strong></Link>. Project for GlobalTalk.</p>
            </div>
            </div>
      </div>
    </footer>
</>
)
}
