import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';

interface propsWithChildren {
  children: ReactNode;
}

export const MainLayout = ({children}: propsWithChildren): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Miguel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}