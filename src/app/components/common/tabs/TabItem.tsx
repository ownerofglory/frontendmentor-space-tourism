import React from "react";
import {GenericProps} from "@/app/props/GenericProps";
import {TabsItemProps} from "@/app/props/TabsItemProps";
import './tabs.css'
import {Barlow_Condensed} from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const TabItem: React.FC<TabsItemProps> = ({title, isActive, chosenHandler}) => {
    const onChosen = () => {
        if (chosenHandler) {
            chosenHandler()
        }
    }

    return (
        <div onClick={e => onChosen()} className={`tab-item ${isActive ? 'tab-item-active' : ''}`}>
            <p className={`tab-title ${barlowCondensed.className}`}>
                {title}
            </p>
        </div>
    );
};