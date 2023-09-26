import './globals.css'
import type { Metadata } from 'next'
import Head from "next/head";
import {Barlow, Barlow_Condensed, Bellefair} from "next/font/google";
import favicon from '../../public/assets/favicon-32x32.png'

export const metadata: Metadata = {
  title: 'Space Tourism Website',
  description: 'Space Tourism Website for FrontendMentor',
}

const bellefairRegular = Bellefair({
    weight: ['400'],
    subsets: ['latin']
})
const barlowCondensed = Barlow_Condensed(
    {
        weight: ['400', '700'],
        subsets: ['latin']
    }
)
const barlow = Barlow(
    {
        weight: ['400', '700'],
        subsets: ['latin']
    }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${bellefairRegular.className} ${barlow.className} ${barlow.className}`}>
      <Head>
          <link rel="icon" href="/public/assets/favicon-32x32.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      {children}
    </html>
  )
}
