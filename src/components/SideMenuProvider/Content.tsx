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
        return <div className="h-[calc(100dvh)] [@media(width>=769px)]:h-[calc(100dvh-80px-40px)] flex flex-col justify-between">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima deserunt earum ipsum! Dolore rem illum quidem eos rerum ipsum et, nisi iste suscipit temporibus! Ipsum ex commodi repellat quibusdam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae totam nemo saepe.
            </p>
            <button onClick={close}>Fechar</button>
        </div>
    }, [ close ])

    return <Context value={{ content: menuContent }}>
        { children }
    </Context>
}