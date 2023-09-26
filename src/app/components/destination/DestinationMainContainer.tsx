'use client'

import {HalfScreenContainer} from "@/app/components/common/layout/HalfScreenContainer";
import {Tabs} from "@/app/components/common/tabs/Tabs";
import {TabPanel} from "@/app/components/common/tabs/TabPanel";
import {DestinationContent} from "@/app/components/destination/DestinationContent";
import {MainContainer} from "@/app/components/common/layout/MainContainer";
import {Barlow_Condensed} from "next/font/google";
import React, {useState} from "react";
import {DestinationMainContainerProps} from "@/app/props/DestinationMainContainerProps";
import {DestinationDetailsModel} from "@/app/model/DestinationDetailsModel";

const barlowCondensed = Barlow_Condensed({
    weight: ['400', '700'],
    subsets: ['latin']
})

const makeTabChosenHandler = (destination: DestinationDetailsModel,
                              handler: (destination: DestinationDetailsModel) => void) => {
    return () => handler(destination)
}

export const DestinationMainContainer: React.FC<DestinationMainContainerProps> = ({items}) => {
    const [chosenDestination, setChosenDestination]
        = useState<DestinationDetailsModel>(items[0]);

    const onTabChose = (destination: DestinationDetailsModel) => {
        setChosenDestination(destination)
    }

    return (
        <MainContainer>
            <HalfScreenContainer>
                <div className="destination-container">
                    <h5 className={`heading-5 destination-title ${barlowCondensed.className}`}>
                        <span className={'num'}>01</span>
                        Pick your destination
                    </h5>

                    <img src={chosenDestination.image.src}/>
                </div>
            </HalfScreenContainer>
            <HalfScreenContainer>
                <Tabs className={'destination-details-containers'}>
                    {
                        items.map(item => (
                            <TabPanel key={item.title}
                                      title={item.title}
                                      handler={makeTabChosenHandler(item, onTabChose)}>
                                <DestinationContent title={item.title}
                                                    description={item.description}
                                                    distanceStr={item.distanceStr}
                                                    travelTimeStr={item.travelTimeStr}
                                                    handler={makeTabChosenHandler(item, onTabChose)}
                                />
                            </TabPanel>
                        ))
                    }
                </Tabs>
            </HalfScreenContainer>
        </MainContainer>
    );
};