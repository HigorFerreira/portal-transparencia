'use client';

import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import { useMenuOpen, useMenuContent } from "@/modules/client/SideMenuProvider/hooks";


function Menu(){

    const isOpen = useMenuOpen()
    const content = useMenuContent()

    return <div
        className={[
            '[@media(width>=1920px)]:hidden',
            '[transition:width_600ms_ease]',
            'overflow-hidden',
            isOpen ? 'w-[clamp(200px,39.06vw,500px)]' : 'w-[0px]'
        ].join(' ')}
    >
        { content }
    </div>
}

function Menu2(){

    const isOpen = useMenuOpen()
    const content = useMenuContent()

    const [ translateY, setTranslateY ] = useState(0)

    const onScroll = () => {
        setTranslateY(window.scrollY)
    }

    useLayoutEffect(() => {
        if(window !== undefined){
            document.addEventListener('scroll', onScroll)
        }
        return () => document.removeEventListener('scroll', onScroll)
    }, [])

    return <div
        className={[
            '[@media(width<1920px)]:hidden',
            '[transition:transform_600ms_ease]',
            'absolute inset-0',
        ].join(' ')}
        style={{
            transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
        }}
    >
        <div className="w-full h-full" style={{ transform: `translateY(${translateY}px)` }}>
            { content }
        </div>
    </div>
}

export default function Content({ children }: PropsWithChildren){
    return <div className="grid grid-cols-[auto_1fr] mt-[calc(80px/2)] [@media(width>=1920px)]:grid-cols-[1fr_1024px_1fr]">
        <Menu />
        <div className="relative overflow-hidden [@media(width<1920px)]:hidden">
            <Menu2 />
        </div>
        <div>
            { children }
        </div>
        <div className="relative overflow-hidden [@media(width<1920px)]:hidden">

        </div>
    </div>
}