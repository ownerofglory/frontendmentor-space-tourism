import {StaticImageData} from "next/image";

export interface DestinationDetailsModel {
    title: string
    description: string
    avgDistance: string
    estdTravelTime: string
    image: StaticImageData
}