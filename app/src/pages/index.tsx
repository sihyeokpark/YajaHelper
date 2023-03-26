import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import User from './components/User'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav>
          
        </nav>
        <section className={styles.container}>
          <h1>1학년 6반</h1>
          <section className={styles.cards}>
            <User name='10 박시혁' isExit={false}></User>
            <User name='10 박시혁' isExit={true}></User>
            <User name='10 박시혁' isExit={false}></User>
          </section>
        </section>
        
      </main>
    </>
  )
}
