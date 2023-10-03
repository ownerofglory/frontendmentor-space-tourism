import {NavContainer} from "@/app/components/common/nav/NavContainer";
import {NavigationBar} from "@/app/components/common/nav/NavigationBar";
import {NavigationItem} from "@/app/components/common/nav/NavigationItem";
import Layout from "@/app/layout";
import {Barlow_Condensed, Inter} from "next/font/google";
import './destination.css'
import {DestinationDetailsModel} from "@/app/model/DestinationDetailsModel";
import {DestinationMainContainer} from "@/app/components/destination/DestinationMainContainer";
import {client} from "../../../sanity/lib/client";
import {groq} from "next-sanity";

const inter = Inter({ subsets: ['latin'] })
const barlowCondensed = Barlow_Condensed({
    weight: ['400', '700'],
    subsets: ['latin']
})

const fetchDestination = async (): Promise<DestinationDetailsModel[]> => {
    return await client.fetch(groq`*[_type == "destination"] {
        title,
        description,
        avgDistance,
        estdTravelTime,
        "image": {
          "src": image.asset->url
        }
    }`);
}

const DestinationPage = async () => {
    const tabContents: DestinationDetailsModel[] = await fetchDestination()

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

                   <DestinationMainContainer items={tabContents} />
                </body>
            </Layout>
        </>
    )
}

export default DestinationPage