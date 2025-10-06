import { PropsWithChildren } from "react"
import { MenuButtonContainerSize } from '../types'

export default function MenuButtonContainer({ children, size }: PropsWithChildren<{ size?: MenuButtonContainerSize }>){
    return <div className={`my-2 flex gap-2 items-center cursor-pointer ${ size ? size : 'text-[clamp(1rem,calc(0.5205vw+0.55rem),1.375rem)]'  }`}>
        { children }
    </div>
}