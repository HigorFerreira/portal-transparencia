'use client'

import { TbLayoutSidebarLeftCollapse as CollapseIcon } from "react-icons/tb"
import { TbLayoutSidebarRightCollapse as ExpandIcon } from "react-icons/tb"
import { useSubMenu } from "@/components/SideMenuProvider/hooks"

export default function OpenCloseMenus(){
    const { open, close } = useSubMenu()
    return <div className='absolute left-[calc(var(--spacing)*4)]'>
        <div className='flex gap-1 text-gray-500'>
            <div
                onClick={close}
                className='cursor-pointer'
                title='Fechar menu'
            >
                <CollapseIcon size={30} />
            </div>
            <div
                onClick={open}
                className='cursor-pointer'
                title='Abrir menu'
            >
                <ExpandIcon size={30} />
            </div>
        </div>
    </div>
}