import {GenericProps} from "@/app/props/GenericProps";

export interface NavigationBarProps extends GenericProps {
    num: string
    title: string
    href: string
    isActive?: boolean
}