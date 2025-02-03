import { SideMenu } from "./style";

export const Aside = ({children}) => {
    return (
        <>
            <SideMenu>
                {children}
            </SideMenu>
        </>
    )
}