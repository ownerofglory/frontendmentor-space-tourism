import React from "react";
import {NavigationBarProps} from "@/app/props/NavigationBarProps";
import Link from "next/link";

export const NavigationItem: React.FC<NavigationBarProps> = ({title, num, isActive, href }) => {
    return (
        <div className={`nav-item ${isActive ? 'nav-item-active' : ''}`}>
            <div className="nav-item-text">
                <div className="nav-item-number">
                    <p>
                        <Link className={'default-link'} href={href}>
                            {num}
                        </Link>
                    </p>
                </div>
                <div className="nav-item-title">
                    <p>
                        <Link className={'default-link'} href={href}>
                            {title}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};