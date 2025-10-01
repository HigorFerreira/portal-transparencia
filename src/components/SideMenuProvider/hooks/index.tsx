import { useContext } from 'react'
import { MainContext as Context } from '../providers'

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