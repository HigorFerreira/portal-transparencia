'use client';

import { createContext, PropsWithChildren, useMemo, JSX, useContext } from "react";
import { useMenu } from './hooks'

const Context = createContext<{ content: JSX.Element }>({ content: <></> })

export function useMenuContent(){
    const { content } = useContext(Context)
    return content
}

export default function Content({ children }: PropsWithChildren){

    const { close } = useMenu()

    const menuContent = useMemo(() => {
        return <div className="w-full h-full bg-white">
            <div>
                <div>
                    Algo aqui
                    <button onClick={close}>Fechar</button>
                </div>
            </div>
        </div>
    }, [])

    return <Context value={{ content: menuContent }}>
        { children }
    </Context>
}