'use client';

import { createContext, useLayoutEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useMenuOpen, useMenu } from "@/modules/client/SideMenuProvider";

const Context = createContext(null)


export default function Component(){


    const isOpen = useMenuOpen()
    const { close } = useMenu()
    const [ container, setContainer ] = useState<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        if(window !== undefined){
            const body = document.body
            const div = document.createElement('div')
            body.insertAdjacentElement('beforebegin', div)
            setContainer(div)
        }
    }, [ ])

    return container === null
        ? null
        : createPortal(
            <Context value={null}>
                <div
                    className={[
                        'fixed z-[100]',
                        'inset-0 bg-white',
                        '[transition:transform_600ms_ease]',
                        '[@media(width>=769px)]:hidden',
                    ].join(' ')}
                    style={{
                        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
                    }}
                >
                    
                </div>
            </Context>,
            container
        )
}