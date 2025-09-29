'use client';
import { useMenu, useMenuOpen } from '@/modules/client/SideMenuProvider'


export default function Component(){

    const isOpen = useMenuOpen()
    const {
        open,
        close,
        toggle,
    } = useMenu()

    return <div>
        <div className='flex gap-4 [&>*]:bg-gray-700 [&>*]:text-white [&>*]:p-6'>
            <button onClick={open} >Open</button>
            <button onClick={close} >Close</button>
            <button onClick={toggle} >Toggle</button>
        </div>
        {
            isOpen
                ? <div className='p-2 bg-green-500'>Open</div>
                : <div className='p-2 bg-red-600'>Close</div>
        }
    </div>
}