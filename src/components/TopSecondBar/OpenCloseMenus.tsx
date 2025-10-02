'use client'

import { TbLayoutSidebarLeftCollapse as CollapseIcon } from "react-icons/tb"
import { TbLayoutSidebarRightCollapse as ExpandIcon } from "react-icons/tb"
import { useMenu, useMenuOpen, useSubMenu, useSubMenuOpen } from "@/components/SideMenuProvider/hooks"
import { useCallback } from "react"

export default function OpenCloseMenus(){

    const isMenuOpen = useMenuOpen()
    const isSubMenuOpen = useSubMenuOpen()

    const { open: openMenu, close: closeMenu } = useMenu()
    const { open: openSubMenu, close: closeSubMenu } = useSubMenu()

    const handleClose =  useCallback(() => {
        if(isMenuOpen && isSubMenuOpen){
            closeSubMenu()
        }
        if(isMenuOpen && !isSubMenuOpen){
            closeMenu()
        }
    },  [ isMenuOpen, isSubMenuOpen, closeSubMenu, closeMenu ])

    const handleOpen =  useCallback(() => {
        if(!isMenuOpen && !isSubMenuOpen){
            openMenu()
        }
        if(isMenuOpen && !isSubMenuOpen){
            openSubMenu()
        }
    },  [ isMenuOpen, isSubMenuOpen, openMenu, openSubMenu ])

    return <div className='absolute left-[calc(var(--spacing)*4)]'>
        <div className='flex gap-1 text-gray-500'>
            <div
                onClick={handleClose}
                className='cursor-pointer'
                title='Fechar menu'
            >
                <CollapseIcon size={30} />
            </div>
            <div
                onClick={handleOpen}
                className='cursor-pointer'
                title='Abrir menu'
            >
                <ExpandIcon size={30} />
            </div>
        </div>
    </div>
}