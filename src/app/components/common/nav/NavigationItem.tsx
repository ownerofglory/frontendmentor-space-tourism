import React from "react";
import {NavigationBarProps} from "@/app/props/NavigationBarProps";
import Link from "next/link";
import {Barlow_Condensed} from "next/font/google";
const barlowCondensed = Barlow_Condensed(
    {
        weight: ['400', '700'],
        subsets: ['latin']
    }
)

export const NavigationItem: React.FC<NavigationBarProps> = ({title, num, isActive, href }) => {
    return (
        <div className={`nav-item ${isActive ? 'nav-item-active' : ''}`}>
            <div className="nav-item-text">
                <div className="nav-item-number">
                    <p>
                        <Link className={`default-link ${barlowCondensed.className}`} href={href}>
                            {num}
                        </Link>
                    </p>
                </div>
                <div className="nav-item-title">
                    <p>
                        <Link className={`default-link ${barlowCondensed.className}`} href={href}>
                            {title}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};