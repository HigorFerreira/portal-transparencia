'use client';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react'
import Content from './Content';

type ContextType = {
    open: boolean
    submenuOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    setSubmenuOpen: Dispatch<SetStateAction<boolean>>
}

const Context = createContext<ContextType>({
    open: false,
    submenuOpen: false,
    setOpen: () => {},
    setSubmenuOpen: () => {}
})

export function useMenuOpen(){
    const { open } =  useContext(Context)
    return open
}

export function useMenu() {
    const { setOpen } = useContext(Context)

    function open(){
        setOpen(true)
    }

    function close(){
        setOpen(false)
    }

    function toggle(){
        setOpen(prev => !prev)
    }

    return {
        open,
        close,
        toggle
    }
}

export function SideMenuProvider(
    {
        children,
        menuInitial,
        submenuInitial,
    }: PropsWithChildren<{
        menuInitial?: 'open' | 'close'
        submenuInitial?: 'open' | 'close'
    }>
){

    const [ open, setOpen ] = useState(menuInitial === 'open' ? true : false)
    const [ submenuOpen, setSubmenuOpen ] = useState(submenuInitial === 'open' ? true : false)


    return <Context value={{ open, submenuOpen, setOpen, setSubmenuOpen, }}>
        <Content>
            { children }
        </Content>
    </Context>
}