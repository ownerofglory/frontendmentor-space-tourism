'use client'

import React, {useEffect} from "react";
import {TabPanelProps} from "@/app/props/TabPanelProps";

export const TabPanel: React.FC<TabPanelProps> = ({children, handler}) => {
    useEffect(() => {

    }, []);

    return (
        <div>
            {children}
        </div>
    );
};