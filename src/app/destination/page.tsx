import {NavContainer} from "@/app/components/common/nav/NavContainer";
import {NavigationBar} from "@/app/components/common/nav/NavigationBar";
import {NavigationItem} from "@/app/components/common/nav/NavigationItem";
import Layout from "@/app/layout";
import {Barlow_Condensed, Inter} from "next/font/google";
import {Tabs} from "@/app/components/common/tabs/Tabs";
import {TabItem} from "@/app/components/common/tabs/TabItem";
import {TabPanel} from "@/app/components/common/tabs/TabPanel";
import {MainContainer} from "@/app/components/common/layout/MainContainer";
import {HalfScreenContainer} from "@/app/components/common/layout/HalfScreenContainer";
import imageMoon from '../../../public/assets/destination/image-moon.png'
import imageMars from '../../../public/assets/destination/image-mars.png'
import imageEuropa from '../../../public/assets/destination/image-europa.png'
import imageTitan from '../../../public/assets/destination/image-titan.png'
import './destination.css'
import {DestinationDetailsModel} from "@/app/model/DestinationDetailsModel";
import {DestinationContent} from "@/app/components/destination/DestinationContent";
import {DestinationMainContainer} from "@/app/components/destination/DestinationMainContainer";

const inter = Inter({ subsets: ['latin'] })
const barlowCondensed = Barlow_Condensed({
    weight: ['400', '700'],
    subsets: ['latin']
})

const DestinationPage = () => {
    const tabContents: DestinationDetailsModel[] = [
        {
            title: 'Moon',
            description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distanceStr: '384,400 km',
            travelTimeStr: '3 days',
            image: imageMoon
        },
        {
            title: 'Mars',
            description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            distanceStr: '225 MIL. km',
            travelTimeStr: '9 months',
            image: imageMars
        },
        {
            title: 'Europa',
            description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distanceStr: '628 MIL. km',
            travelTimeStr: '3 years',
            image: imageEuropa
        },
        {
            title: 'Titan',
            description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distanceStr: '1.6 BIL. km',
            travelTimeStr: '7 years',
            image: imageTitan
        }
    ]

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