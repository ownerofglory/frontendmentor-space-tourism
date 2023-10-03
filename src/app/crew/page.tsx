import {NavContainer} from "@/app/components/common/nav/NavContainer";
import {NavigationBar} from "@/app/components/common/nav/NavigationBar";
import {NavigationItem} from "@/app/components/common/nav/NavigationItem";
import Layout from "@/app/layout";
import {Inter} from "next/font/google";
import {client} from "../../../sanity/lib/client";
import {groq} from "next-sanity";
import {CrewMemberModel} from "@/app/model/CrewMemberModel";
const inter = Inter({ subsets: ['latin'] })

const fetchCrewMembers = async (): Promise<CrewMemberModel[]> => {
    return client.fetch(groq`*[_type=='crewMembers'] {
        name,
        position,
        bio,
        "image": {
          "src": image.asset->url
        }
    }`)
}

const CrewPage = async () => {
    const crewMembers = await fetchCrewMembers()

    return (
        <>
            <Layout>
                <body className={`${inter.className} background-crew`}>
                    <NavContainer>
                        <NavigationBar>
                            <NavigationItem num={'00'} title={'Home'} href={'/'}/>
                            <NavigationItem num={'01'} title={'Destination'} href={'/destination'}/>
                            <NavigationItem isActive={true} num={'02'} title={'Crew'}  href={'/crew'}/>
                            <NavigationItem num={'03'} title={'Technology'}  href={'/technology'}/>
                        </NavigationBar>
                    </NavContainer>

                </body>
            </Layout>
        </>
    )
}

export default CrewPage