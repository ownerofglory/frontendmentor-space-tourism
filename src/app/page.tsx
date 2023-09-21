
import Image from 'next/image'
import {NavigationBar} from "@/app/components/common/NavigationBar";
import {NavigationItem} from "@/app/components/common/NavigationItem";
import Head from "next/head";
import Layout from './layout';
import {NavContainer} from "@/app/components/common/NavContainer";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          <Layout>
              <body className={`${inter.className} background-home`}>
                  <NavContainer>
                      <NavigationBar>
                          <NavigationItem isActive={true} num={'00'} title={'Home'} href={'/'}/>
                          <NavigationItem num={'01'} title={'Destination'} href={'/destination'}/>
                          <NavigationItem num={'02'} title={'Crew'}  href={'/crew'}/>
                          <NavigationItem num={'03'} title={'Technology'}  href={'/technology'}/>
                      </NavigationBar>
                  </NavContainer>
              </body>
          </Layout>
      </>
  )
}
