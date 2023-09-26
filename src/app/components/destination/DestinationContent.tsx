import React from "react";
import {DestinationContentProps} from "@/app/props/DestinationContentProps";
import './content.css'
import {Barlow, Barlow_Condensed, Bellefair} from "next/font/google";

const barlow = Barlow(
    {
        weight: ['400', '700'],
        subsets: ['latin']
    }
)

const barlowCondensed = Barlow_Condensed(
    {
        weight: ['400', '700'],
        subsets: ['latin']
    }
)

const bellefairRegular = Bellefair({
    weight: ['400'],
    subsets: ['latin']
})

export const DestinationContent: React.FC<DestinationContentProps> = ({title,
                                                                          description,
                                                                          distanceStr,
                                                                          travelTimeStr}) => {
    return (
        <div className={'destination-content-parent'}>
            <h2 className={`heading-2 ${bellefairRegular.className}`}>{title}</h2>
            <p className={`body-text destination-description ${barlow.className}`}>{description}</p>

            <div className={'destination-facts-container'}>
                <div className={'destination-fact'}>
                    <div>
                        <p className={`subheading-2 ${barlowCondensed.className}`}>
                            AVG. DISTANCE
                        </p>
                        <p className={`subheading-1 ${bellefairRegular.className}`}>
                            {distanceStr}
                        </p>
                    </div>
                </div>
                <div className={'destination-fact'}>
                    <div>
                        <p className={`subheading-2 ${barlowCondensed.className}`}>
                            Est. travel time
                        </p>
                        <p className={`subheading-1 ${bellefairRegular.className}`}>
                            {travelTimeStr}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};