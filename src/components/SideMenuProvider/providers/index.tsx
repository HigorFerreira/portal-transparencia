import { createContext, JSX } from 'react'
import type { ContextType } from '../types'

export const MainContext = createContext<ContextType>({
    open: false,
    submenuOpen: false,
    setOpen: () => {},
    setSubmenuOpen: () => {}
})

export const ContentContext = createContext<{ content: JSX.Element }>({ content: <></> })