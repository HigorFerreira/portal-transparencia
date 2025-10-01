import { SideMenuProvider as SideMenuProviderClientComponent } from './client'
import { ComponentProps } from './types'

export default async function SideMenuProvider({ ...props }: ComponentProps){
    return <SideMenuProviderClientComponent { ...props } />
}