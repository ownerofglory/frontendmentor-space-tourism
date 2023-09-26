import {StaticImageData} from "next/image";

export interface DestinationDetailsModel {
    title: string
    description: string
    distanceStr: string
    travelTimeStr: string
    image: StaticImageData
}