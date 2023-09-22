'use client'

import './roundButton.css'
import React, {useEffect} from "react";
import {ButtonProps} from "@/app/props/ButtonProps";
import {Bellefair} from "next/font/google";

const bellefairRegular = Bellefair({
    weight: ['400'],
    subsets: ['latin']
})

export const RoundButton: React.FC<ButtonProps> = ({title, clickHandler, className}) => {
    useEffect(() => {

    }, []);

    const onButtonClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (clickHandler) {
            await clickHandler(e)
        }
    }

    return (
        <div className={`button-container`}>
            <button className={`round-button ${bellefairRegular.className} ${className ?? ''}`} onClick={onButtonClick}>
                {title}
            </button>
        </div>
    );
};