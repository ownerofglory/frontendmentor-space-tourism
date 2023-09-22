import React from "react";
import {GenericProps} from "@/app/props/GenericProps";
import './layout.css'

export const HalfScreenContainer: React.FC<GenericProps> = ({children}) => {
    return (
        <div className={'half-screen'}>
            {children}
        </div>
    );
};