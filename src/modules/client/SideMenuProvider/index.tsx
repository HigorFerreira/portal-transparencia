'use client';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react'
import Content from './Content';

type ContextType = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Context = createContext<ContextType>({
    open: false,
    setOpen: () => {}
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

export function SideMenuProvider({ children }: PropsWithChildren){

    const [ open, setOpen ] = useState(false)


    return <Context value={{ open, setOpen }}>
        <Content>
            { children }
        </Content>
    </Context>
}