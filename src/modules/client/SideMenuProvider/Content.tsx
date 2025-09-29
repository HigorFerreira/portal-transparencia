'use client';

import { createContext, PropsWithChildren, useMemo, JSX, useContext } from "react";
import { useMenu } from './hooks'

const Context = createContext<{ content: JSX.Element }>({ content: <></> })

export function useMenuContent(){
    const { content } = useContext(Context)
    return content
}

/*

[@media(width>=769px)]
[@media(width>=1920px)]

*/

export default function Content({ children }: PropsWithChildren){

    const { close } = useMenu()

    const menuContent = useMemo(() => {
        return <div className="h-full w-full">
            Algo aqui
        </div>
    }, [ close ])

    return <Context value={{ content: menuContent }}>
        { children }
    </Context>
}