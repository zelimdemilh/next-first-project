import {createContext, PropsWithChildren, ReactNode, useState} from "react";
import {IMenuItem} from "@/types/IMenu";
import {TopLevelCategory} from "@/types/ICourse";

export interface IAppContext {
    menu: IMenuItem[]
    firstCategory: TopLevelCategory
    setMenu?: (newMenu: IMenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses})

export const AppContextProvider = ({children, firstCategory, menu}: PropsWithChildren<IAppContext>): JSX.Element => {

    const [ menuState, setMenuState ] = useState<IMenuItem[]>(menu)

    const setMenu = (newMenu: IMenuItem[]) => {
        setMenuState(newMenu)
    }

    return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
        {children}
    </AppContext.Provider>
}