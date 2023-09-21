import {NavigationItem} from "@/app/components/common/NavigationItem";
import './navbar.css'
import {NavigationBarProps} from "@/app/props/NavigationBarProps";
import {GenericProps} from "@/app/props/GenericProps";

export const NavigationBar: React.FC<GenericProps> = ({children}) => {
    return (
        <nav>
            {children}
        </nav>
    );
};