import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mitchell Karmen
        </h1>

        <p className={styles.description}>
          PhD Student at Johns Hopkins University
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/mitchellkarmen" className={styles.card}>
            <Image
              src="/GitHub-Mark.png"
              alt="Link to my GitHub"
              width={80}
              height={80}
              />
          </a>

          <a href="https://ui.adsabs.harvard.edu/search/q=author%3AKarmen%2C%20Mitchell" className={styles.card}>
                        <Image
              src="/ads_logo.svg"
              alt="Link to my papers on ADS"
              width={80}
              height={80}
              />
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}>
            <Image
              src="/cv.png"
              alt="My CV"
              width={80}
              height={80}
              />
          </a>
        </div>
      </main>
      
    </div>
  )
}
