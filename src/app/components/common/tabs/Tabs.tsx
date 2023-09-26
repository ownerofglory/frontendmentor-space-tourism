'use client'

import {TabsProps} from "@/app/props/TabsProps";
import {TabsItemProps} from "@/app/props/TabsItemProps";
import React, {ReactElement, useEffect, useState} from "react";
import {TabItem} from "@/app/components/common/tabs/TabItem";

export const Tabs: React.FC<TabsProps> = ({children, className}) => {
    const [activeTabNum, setActiveTabNum] = useState(0);

    useEffect(() => {

    }, []);

    return (
        <div className={`${className}`}>
            <div className={`tabs-head`}>
                {
                    React.Children.map(children, (child, index) => {
                        return (
                            <TabItem
                                title={child?.props.title ?? ''}
                                isActive={index === activeTabNum}
                                chosenHandler={() => {
                                    setActiveTabNum(index)
                                    child?.props.handler()
                                }}
                                key={index}
                            />
                        )
                    })
                }
            </div>
            <div className="tabs-content">
                {
                    (children as ReactElement<TabsItemProps>[])[activeTabNum]
                }
            </div>

        </div>
    );
};