import {GenericProps} from "@/app/props/GenericProps";
import './layout.css'

export const MainContainer: React.FC<GenericProps> = ({children}) => {
    return (
        <main className={'main-container'}>
            {children}
        </main>
    );
};