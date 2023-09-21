"use client"

import {GenericProps} from "@/app/props/GenericProps";
import {useState} from "react";

export const NavContainer: React.FC<GenericProps> = ({children}) => {
    const [mobileExpanded, setMobileExpanded] = useState(false);

    const expandNavMobile = () => {
        console.log('expand')
        setMobileExpanded(true)
    }

    const closeNavMobile = () => {
        console.log('close')
        setMobileExpanded(false)
    }

    return (
        <div className={'nav-container'}>
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                    </g>
                </svg>
            </div>
            <div className="nav-hr">
            </div>
            <div className={`nav-wrapper ${mobileExpanded? 'mobile-shown': 'mobile-hidden'}`}>
                {children}
            </div>
            <div className="hamburger" onClick={event => expandNavMobile()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
            </div>
            <div className={`nav-close  ${mobileExpanded? 'mobile-shown': 'mobile-hidden'}`} onClick={event => closeNavMobile()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                    <g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
                    </g>
                </svg>
            </div>
        </div>
    );
};