import {StaticImageData} from "next/image";

export interface CrewMemberModel {
    name: string
    position: string
    bio: string
    image: StaticImageData
}