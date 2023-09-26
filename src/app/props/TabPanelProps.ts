import {GenericProps} from "@/app/props/GenericProps";
import {DestinationDetailsModel} from "@/app/model/DestinationDetailsModel";

export interface TabPanelProps extends GenericProps {
    title:string
    handler?: () => void
}