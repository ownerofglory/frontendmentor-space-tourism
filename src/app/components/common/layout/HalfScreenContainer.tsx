import React from "react";
import {GenericProps} from "@/app/props/GenericProps";
import './layout.css'

export const HalfScreenContainer: React.FC<GenericProps> = ({children, className}) => {
    return (
        <div className={`half-screen ${className}`}>
            {children}
        </div>
    );
};