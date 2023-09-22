import {GenericProps} from "@/app/props/GenericProps";
import React from "react";

export interface ButtonProps extends GenericProps {
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<any>
    title: string
}