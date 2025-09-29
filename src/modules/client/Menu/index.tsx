'use client';

import { createContext, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useMenuOpen, useMenuContent } from "@/modules/client/SideMenuProvider/hooks";

const Context = createContext(null)


export default function Component(){


    const isOpen = useMenuOpen()
    const [ container, setContainer ] = useState<HTMLDivElement | null>(null)

    const content = useMenuContent()

    useLayoutEffect(() => {
        if(window !== undefined){
            const body = document.body
            const div = document.createElement('div')
            body.insertAdjacentElement('afterbegin', div)
            setContainer(div)
        }
    }, [ ])

    return container === null
        ? null
        : createPortal(
            <Context value={null}>
                <div
                    className={[
                        'fixed top-0 right-0 left-0 h-[100dvh]',
                        'z-1001',
                        'bg-white',
                        '[transition:transform_600ms_ease]',
                        '[@media(width>=769px)]:hidden',
                    ].join(' ')}
                    style={{
                        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
                    }}
                >
                    { content }
                </div>
            </Context>,
            container
        )
}