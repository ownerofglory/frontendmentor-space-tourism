import {GenericProps} from "@/app/props/GenericProps";

export interface DestinationContentProps extends GenericProps {
    title: string
    description: string
    distanceStr: string
    travelTimeStr: string
    handler: () => void
}