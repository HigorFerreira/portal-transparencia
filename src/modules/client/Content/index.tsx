'use client';

import { PropsWithChildren } from "react";
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

    return <div
        className={[
            '[@media(width<1920px)]:hidden',
            '[transition:transform_600ms_ease]',
            'absolute h-[calc(100dvh-80px-45px-40px)] inset-0 bg-amber-300 [&_*]:!bg-transparent',
            // isOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'
        ].join(' ')}
        style={{
            transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
        }}
    >
        { content }
    </div>
}

export default function Content({ children }: PropsWithChildren){
    return <div className="grid grid-cols-[auto_1fr] [@media(width>=1920px)]:grid-cols-[1fr_1024px_1fr]">
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