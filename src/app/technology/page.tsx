import {NavContainer} from "@/app/components/common/nav/NavContainer";
import {NavigationBar} from "@/app/components/common/nav/NavigationBar";
import {NavigationItem} from "@/app/components/common/nav/NavigationItem";
import Layout from "@/app/layout";
import {Barlow_Condensed, Inter} from "next/font/google";
import {client} from "../../../sanity/lib/client";
import {groq} from "next-sanity";
import {TechnologyStepModel} from "@/app/model/TechnologyStepModel";

const inter = Inter({ subsets: ['latin'] })

const fetchTechnologyStep = async (): Promise<TechnologyStepModel[]> => {
    return client.fetch(groq`*[_type == "launchSteps"]{
        title,
        description,
        "image": {
          "src": image.asset->url
        }
    }`)
}

const TechnologyPage = async () => {
    const technologySteps = await fetchTechnologyStep()

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