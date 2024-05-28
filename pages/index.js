import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar.tsx';


const openPdf = () => {
    window.open("https://raw.githubusercontent.com/user/repo/master/file.pdf");
  };

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mitchell Karmen</title>
        <meta name="description" content="Mitchell Karmen's website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mitchell Karmen
        </h1>

        <p className={styles.description}>
          Astrophysics PhD Student at Johns Hopkins University
	  NSF Graduate Research Fellow
        </p>
        <div className={styles.grid}>
          <a href="https://github.com/mitchellkarmen" className={styles.card}>
            <Image
              src="/GitHub-Mark.png"
              alt="Link to my GitHub"
              width={35}
              height={35}
              />
          </a>

          <a href="https://ui.adsabs.harvard.edu/search/q=author%3AKarmen%2C%20Mitchell" className={styles.card}>
                        <Image
              src="/ads_logo.svg"
              alt="Link to my papers on ADS"
              width={35}
              height={35}
              />
          </a>

          <a
            href="https://raw.githubusercontent.com/mitchellkarmen/CV/master-pdf/main.pdf"
            className={styles.card}>
            <Image
              src="/cv.png"
              alt="My CV"
              width={35}
              height={35}
              />
          </a>
        </div>
      </main>

    <footer>
      <p>Contact me:</p>
      <a href="mailto:mkarmen1@jhu.edu">mkarmen1[at]jhu[dot]edu</a>
    </footer>
      
    </div>
  )
}
