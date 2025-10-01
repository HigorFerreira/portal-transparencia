import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export type ContextType = {
    open: boolean
    submenuOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    setSubmenuOpen: Dispatch<SetStateAction<boolean>>
}

export type ComponentProps = PropsWithChildren<{
    menuInitial?: 'open' | 'close'
    submenuInitial?: 'open' | 'close'
}>