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
        return <div className="fixed top-0 right-0 left-0 h-[250px] overflow-hidden grid grid-rows-[1fr_auto]">
            <div className="overflow-hidden">
                <div className="overflow-auto">

                </div>
            </div>
            <div>
                <button onClick={close}>Fechar</button>
            </div>
        </div>
    }, [ close ])

    return <Context value={{ content: menuContent }}>
        { children }
    </Context>
}