'use client'

import { useSubMenuOpen } from "@/components/SideMenuProvider/hooks"
import { PropsWithChildren } from "react"

export function ClientContainer(
    { children }: PropsWithChildren
){
    const isOpen = useSubMenuOpen()
    return <div
        className={[
            "relative h-full shadow overflow-hidden",
            "[transition:width_450ms_ease]",
            isOpen ? "w-[250px]" : "w-0"
        ].join(" ")}
    >
        <div
            className={[
                "absolute right-0 h-full",
                isOpen ? "w-[250px]" : "w-0"
            ].join(" ")}
        >
            { children }
        </div>
    </div>
}