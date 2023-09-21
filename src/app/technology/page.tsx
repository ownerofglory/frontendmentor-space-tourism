import {NavContainer} from "@/app/components/common/NavContainer";
import {NavigationBar} from "@/app/components/common/NavigationBar";
import {NavigationItem} from "@/app/components/common/NavigationItem";
import Layout from "@/app/layout";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ['latin'] })


const TechnologyPage = () => {
    return (
        <>
            <Layout>
                <body className={`${inter.className} background-technology`}>
                    <div>
                        <NavContainer>
                            <NavigationBar>
                                <NavigationItem num={'00'} title={'Home'} href={'/'}/>
                                <NavigationItem num={'01'} title={'Destination'} href={'/destination'}/>
                                <NavigationItem num={'02'} title={'Crew'}  href={'/crew'}/>
                                <NavigationItem isActive={true} num={'03'} title={'Technology'}  href={'/technology'}/>
                            </NavigationBar>
                        </NavContainer>
                    </div>
                </body>
            </Layout>
        </>
    )
}

export default TechnologyPage