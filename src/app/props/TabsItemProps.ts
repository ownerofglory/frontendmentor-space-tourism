import {GenericProps} from "@/app/props/GenericProps";
import {TabPanelProps} from "@/app/props/TabPanelProps";
import {DestinationDetailsModel} from "@/app/model/DestinationDetailsModel";

export interface TabsItemProps extends TabPanelProps {
    chosenHandler?: () => void
    isActive: boolean
}