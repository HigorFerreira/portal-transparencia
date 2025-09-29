'use client';

import { PropsWithChildren } from "react";
import { useMenuOpen } from "@/modules/client/SideMenuProvider";


function Menu(){

    const isOpen = useMenuOpen()

    return <div
        className={[
            '[@media(width>=1920px)]:hidden',
            '[transition:width_600ms_ease]',
            isOpen ? 'w-[clamp(200px,39.06vw,500px)]' : 'w-[0px]'
        ].join(' ')}
    >

    </div>
}

function Menu2(){

    const isOpen = useMenuOpen()

    return <div
        className={[
            '[@media(width<1920px)]:hidden',
            '[transition:transform_600ms_ease]',
            'absolute inset-0',
            // isOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'
        ].join(' ')}
        style={{
            transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
        }}
    >

    </div>
}

export default function Content({ children }: PropsWithChildren){
    return <div className="grid grid-cols-[auto_1fr] [@media(width>=1920px)]:grid-cols-[1fr_1024px_1fr]">
        <Menu />
        <div className="relative [@media(width<1920px)]:hidden">
            <Menu2 />
        </div>
        <div>
            { children }
        </div>
        <div className="relative [@media(width<1920px)]:hidden">

        </div>
    </div>
}