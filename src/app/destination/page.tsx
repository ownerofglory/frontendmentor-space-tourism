import {NavContainer} from "@/app/components/common/nav/NavContainer";
import {NavigationBar} from "@/app/components/common/nav/NavigationBar";
import {NavigationItem} from "@/app/components/common/nav/NavigationItem";
import Layout from "@/app/layout";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

const DestinationPage = () => {
    return (
        <>
            <Layout>
                <body className={`${inter.className} background-destination`}>
                    <NavContainer>
                        <NavigationBar>
                            <NavigationItem num={'00'} title={'Home'} href={'/'}/>
                            <NavigationItem isActive={true} num={'01'} title={'Destination'} href={'/destination'}/>
                            <NavigationItem num={'02'} title={'Crew'}  href={'/crew'}/>
                            <NavigationItem num={'03'} title={'Technology'}  href={'/technology'}/>
                        </NavigationBar>
                    </NavContainer>
                </body>
            </Layout>
        </>
    )
}

export default DestinationPage