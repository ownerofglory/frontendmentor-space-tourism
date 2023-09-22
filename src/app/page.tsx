import {NavigationBar} from "@/app/components/common/nav/NavigationBar";
import {NavigationItem} from "@/app/components/common/nav/NavigationItem";
import Layout from './layout';
import {NavContainer} from "@/app/components/common/nav/NavContainer";
import {Barlow, Barlow_Condensed, Bellefair, Inter} from "next/font/google";
import {RoundButton} from "@/app/components/common/RoundButton";
import {MainContainer} from "@/app/components/common/layout/MainContainer";
import {HalfScreenContainer} from "@/app/components/common/layout/HalfScreenContainer";
import './home.css'

const inter = Inter({ subsets: ['latin'] })
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

                  <MainContainer>
                      <HalfScreenContainer>
                          <div className="home-content-wrapper">
                              <div className="home-content-container">
                                  <h5 className={`heading-5 ${barlowCondensed.className}`}>
                                      SO, YOU WANT TO TRAVEL TO
                                  </h5>
                                  <h1 className={`heading-1 ${bellefairRegular.className}`}>
                                      SPACE
                                  </h1>
                                  <p className={`body-text ${barlow.className}`}>
                                      Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                                  </p>
                              </div>
                          </div>
                      </HalfScreenContainer>

                      <HalfScreenContainer>
                          <div className="home-button-wrapper">
                              <RoundButton title={'Explore'} className={'floating-button'}/>
                          </div>
                      </HalfScreenContainer>
                  </MainContainer>
              </body>
          </Layout>
      </>
  )
}
