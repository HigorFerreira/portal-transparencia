'use client';

import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useMenuOpen, useMenu } from "@/modules/client/SideMenuProvider";

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
            <div
                className={[
                    'fixed z-[100]',
                    'inset-0 bg-white',
                    '[transition:transform_600ms_ease]',
                ].join(' ')}
                style={{
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
                }}
            >
                <button onClick={close}>Close</button>
            </div>,
            container
        )
}