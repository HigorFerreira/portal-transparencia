'use client';
import { useState } from 'react'
import Content from './Content'
import { MainContext as Context } from '../providers'
import { ComponentProps } from '../types'

export function SideMenuProvider(
    {
        children,
        menuInitial,
        submenuInitial,
    }: ComponentProps
){
    const [ open, setOpen ] = useState(menuInitial === 'open' ? true : false)
    const [ submenuOpen, setSubmenuOpen ] = useState(submenuInitial === 'open' ? true : false)


    return <Context value={{ open, submenuOpen, setOpen, setSubmenuOpen, }}>
        <Content>
            { children }
        </Content>
    </Context>
}