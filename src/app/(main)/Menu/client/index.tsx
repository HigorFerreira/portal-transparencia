'use client'

import { useMenuOpen } from "@/components/SideMenuProvider/hooks"
import { PropsWithChildren } from "react"

export function ClientContainer(
    { children }: PropsWithChildren
){
    const isOpen = useMenuOpen()
    return <div
        className={[
            "relative h-full shadow overflow-hidden",
            "[transition:width_600ms_ease]",
            isOpen ? "w-[400px]" : "w-0"
        ].join(" ")}
    >
        <div
            className={[
                "absolute right-0 h-full",
                isOpen ? "w-[400px]" : "w-0"
            ].join(" ")}
        >
            { children }
        </div>
    </div>
}